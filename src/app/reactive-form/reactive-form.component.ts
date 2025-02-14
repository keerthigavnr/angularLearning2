import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  users: any[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '9876543210',
      dob: '1990-01-01',
      state: 'Karnataka',
      gender: 'male',
      address: '123, 4th Cross, 5th Main',
      city: 'Bangalore',
    },
  ];
  showTable: boolean = true;
  editingUserIndex: number | null = null;
  states: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      gender: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      if (this.editingUserIndex !== null) {
        this.users[this.editingUserIndex] = this.userForm.value;
        this.editingUserIndex = null;
      } else {
        this.users.push(this.userForm.value);
      }
      this.userForm.reset();
      this.showTable = true;
    }
  }

  deleteUser(user: any) {
    this.users = this.users.filter((u) => u !== user);
  }

  selectedUser: any = null;
  isModalOpen = false;
  isEditModalOpen = false;

  editUser(user: any): void {
    this.selectedUser = user;
    this.isEditModalOpen = true;
  }
  viewUser(user: any): void {
    this.selectedUser = user;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedUser = null;
  }
  closeEditModal(): void {
    this.isEditModalOpen = false;
    this.selectedUser = null;
  }
  saveUserData(updatedUserData: any): void {
    // Find the index of the user being edited
    const userIndex = this.users.findIndex(
      (user) =>
        user.email === this.selectedUser?.email &&
        user.phone === this.selectedUser?.phone
    );

    if (userIndex !== -1) {
      // Update the user in the array
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...updatedUserData,
      };

      // Create a new reference to trigger change detection
      this.users = [...this.users];

      // Close the modal
      this.closeEditModal();
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.userForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }
}
