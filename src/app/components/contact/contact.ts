import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
selector: 'app-contact',
standalone: true,
imports: [CommonModule],
templateUrl: './contact.html',
styleUrls: ['./contact.css']
})
export class ContactComponent {
title = 'Contact';
subtitle = 'Let\'s build something great together.';
email = 'adrinbershik.2201008@srec.ac.in';
}