import {Injectable} from "@angular/core";
declare var $: any;

@Injectable()
export class Notification {

    private template = '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" aria-label="Cerrar" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
    '<i class="material-icons" data-notify="icon">notifications</i> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
    '</div>';

    constructor() {

    }

    showNotification(type, from, align, message ){
        //const type = ['','info','success','warning','danger'];

        $.notify({
            icon: "notifications",
            message: message

        },{
            offset: {
                x: 20,
                y: 60
            },
            width: 500,
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: this.template
        });
    }

}