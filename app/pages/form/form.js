import { Page } from 'ionic/ionic';
import { Component } from 'angular2/core';  
import { FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl } from 'angular2/common';


@Page({
	templateUrl: 'build/pages/form/form.html',
	directives: [FORM_DIRECTIVES]
})

export class FormPage {

	authForm: ControlGroup;
	username: AbstractControl;
	password: AbstractControl;

	constructor(fb: FormBuilder) {
	   	this.authForm = fb.group({  
	    	'username': ['', Validators.compose([Validators.required, minLengthValidator])],
	    	'password': ['', Validators.compose([Validators.required, minLengthValidator])]
	    });

		this.username = this.authForm.controls['username'];	    
		this.password = this.authForm.controls['password'];		
	}

	onSubmit(value: string): void { 
	    if(this.authForm.valid) {
	    	console.log('Submitted value: ', value);
	    }
	} 

	function minLengthValidator(control: Control): { [s: string]: boolean } {  
		if (!control.value.match(/\w{8,}/)) {  
			return {minLengthValidator: true};  
		}
	}
}