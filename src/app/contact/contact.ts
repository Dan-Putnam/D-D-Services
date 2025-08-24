import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FormsModule, JsonPipe],
  //providers: [FormBuilder],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      service: ['', Validators.required],
      hours: [''],
      message: ['', Validators.required],
    });
  }

  async send(){
    if (this.form.valid) {
      const formData = this.form.value;
      emailjs.init('FeJ6wg6zDOdluG8Oo');
      let response = await emailjs.send("service_v8whhv3","template_7hj5vcb",formData);
      alert('Thank you for contacting us! We’ll get back to you soon.');
      this.form.reset();
    } else {
      alert('Form is invalid!');
    }
  }

}
