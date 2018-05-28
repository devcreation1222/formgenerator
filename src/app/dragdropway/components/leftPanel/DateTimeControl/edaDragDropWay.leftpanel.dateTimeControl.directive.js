import leftPanelDateTimeControlTemplate from './edaDragDropWay.leftpanel.dateTimeControl.template.html';

const LEFT_PANEL_DATETIME_CONTROL_DIRECTIVE = 'leftPanelDateTimeControl';

function leftPanelDateTimeControl() {
    let directive = {
        restrict: 'E',
        template: leftPanelDateTimeControlTemplate
    };
    return directive;
}

leftPanelDateTimeControl.$inject = [];

export default leftPanelDateTimeControl;

export {
    LEFT_PANEL_DATETIME_CONTROL_DIRECTIVE
};