import leftPanelRepeatGroupTemplate from './edaDragDropWay.leftpanel.repeatGroup.template.html';

const LEFT_PANEL_REPEAT_GROUP_DIRECTIVE = 'leftPanelRepeatGroup';

function leftPanelRepeatGroup() {
    let directive = {
        restrict: 'E',
        template: leftPanelRepeatGroupTemplate,
        controller: class repeatGroupController {
            static $inject = [];
            constructor() {
                var vm = this;
                this.vm = vm;
                vm.copyRepeatSectionFields = (fields, index) => {
                    fields = angular.copy(fields);
                    vm.addRandomIds(fields, index);
                    return fields;
                }
                vm.addRandomIds = (fields, index) => {
                    angular.forEach(fields, function(field, _index) {
                        if (field.fieldGroup) {
                            vm.addRandomIds(field.fieldGroup);
                            return;
                        }

                        if (field.templateOptions && field.templateOptions.fields) {
                            vm.addRandomIds(field.templateOptions.fields);
                        }

                        field.id = field.id || (field.key + '_' + _index + '_' + vm.getRandomInt(0, 9999));
                    });
                }

                vm.getRandomInt = (min, max) => {
                    return Math.floor(Math.random() * (max - min)) + min;
                }
            }
        }
    };
    return directive;
}

leftPanelRepeatGroup.$inject = [];

export default leftPanelRepeatGroup;

export {
    LEFT_PANEL_REPEAT_GROUP_DIRECTIVE
};