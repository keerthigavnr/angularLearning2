import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
  city: string;
  state: string;
}

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.scss'
})
export class EditModalComponent implements OnInit, OnChanges {
  @Input() userData: User | null = null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<User>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.patchFormValues();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Check if userData has changed and is not the first change
    if (changes['userData'] && this.userData) {
      this.patchFormValues();
    }
  }

  private patchFormValues() {
    if (this.userData) {
      console.log('Patching form with data:', this.userData); // Debug log
      this.userForm.patchValue({
        firstName: this.userData.firstName || '',
        lastName: this.userData.lastName || '',
        email: this.userData.email || '',
        phone: this.userData.phone || '',
        dob: this.userData.dob || '',
        gender: this.userData.gender || '',
        address: this.userData.address || '',
        city: this.userData.city || '',
        state: this.userData.state || ''
      });
    }
  }

  closeModal(): void {
    this.userForm.reset();
    this.close.emit();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.save.emit(this.userForm.value);
      this.userForm.reset();
      this.closeModal();
    }
  }
}