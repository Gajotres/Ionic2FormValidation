import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkFirstCharacterValidator } from '../validators/customValidators';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage {

	authForm : FormGroup;

	constructor(public navCtrl: NavController, fb: FormBuilder) {
		this.authForm = fb.group({
		  'username' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
		  'password': [null, Validators.compose([Validators.required, Validators.minLength(8), checkFirstCharacterValidator(/^\d/i)])],
		  'gender' : 'e'
		})  
	}
	
	submitForm(value: any):void{
		console.log('Form submited!')
		console.log(value);
	}	

}
