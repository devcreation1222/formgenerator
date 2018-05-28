import leftPanelEmailControlTemplate from './edaDragDropWay.leftpanel.emailControl.template.html';

const LEFT_PANEL_EMAIL_CONTROL_DIRECTIVE = 'leftPanelEmailControl';

function leftPanelEmailControl() {
    let directive = {
        restrict: 'E',
        template: leftPanelEmailControlTemplate
    };
    return directive;
}

leftPanelEmailControl.$inject = [];

export default leftPanelEmailControl;

export {
    LEFT_PANEL_EMAIL_CONTROL_DIRECTIVE
};