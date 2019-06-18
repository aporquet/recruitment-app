import {Component, Input} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Candidate from '../models/Candidate';
import Skill from '../models/Skill';

@Component({
    selector: 'ngbd-modal-config',
    templateUrl: './modal-config.html',
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal]
})
export class NgbdModalConfig {
    @Input() candidate: Candidate;

    newFirstName: string;
    newLastName: string;
    newMail: string;
    newExperience: number;
    newSkills: Skill[];
    newKeySkills: Skill[];

    constructor(config: NgbModalConfig, private modalService: NgbModal) {
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }

    open(content) {
        this.modalService.open(content);
    }
}
