import {
    dateFormats,
    setToday,
    clearDateTime
} from './edaDragDropWay.leftPanel.controller.helpers';

const LEFT_PANEL_CONTROLLER = 'leftPanelController';
const LEFT_PANEL_CONTROLLERAS = 'leftPanelCtrl';

class leftPanelController {
    constructor(toaster,
        $timeout,
        $selectOptionMange,
        controllerModalProxy) {

        this.toaster = toaster;
        this.$timeout = $timeout;
        this.$selectOptionMange = $selectOptionMange;
        this.controllerModalProxy = controllerModalProxy;

        this.init();
    }

    init() {
        const initOptionModel = {
            rows: []
        };

        this.proxyModel = this.controllerModalProxy.proxyModel;

        this.radioRowCollection = initOptionModel;
        this.newOptionRadio = {
            saisie: ''
        };

        this.proxyModel.selectedControl = this.proxyModel.temporyConfig.selectedControl;
        this.proxyModelFiltered = {};
        this.modelproxyModel = {};

        this.basicSelectRowCollection = this.controllerModalProxy.basicSelectRowCollection;
        this.newOptionBasicSelect = this.controllerModalProxy.newOptionBasicSelect;

        this.groupedSelectRowCollection = this.controllerModalProxy.groupedSelectRowCollection;
        this.newOptionGroupedSelect = this.controllerModalProxy.newOptionGroupedSelect;
        this.GroupedSelectGroups = this.controllerModalProxy.GroupedSelectGroups;
        this.newGroupGroupedSelect = this.controllerModalProxy.newGroupGroupedSelect;
        this.groupSelectGroupClick = this.controllerModalProxy.groupSelectGroupClick;


        this.multiSelectRowCollection = this.controllerModalProxy.multiSelectRowCollection;
        this.proxyModel.temporyConfig.multifilter = [];

        var temp_const = {
            'group': ""
        };
        this.proxyModel.temporyConfig.multifilter.push(temp_const);
        this.newOptionMultiSelect = this.controllerModalProxy.newOptionMultiSelect;
        this.MultiSelectGroups = this.controllerModalProxy.MultiSelectGroups;
        this.newGroupMultiSelect = this.controllerModalProxy.newGroupMultiSelect;
        this.showGroupList = false;


        this.radioRowCollection = this.controllerModalProxy.radioRowCollection;
        this.newOptionRadio = this.controllerModalProxy.newOptionRadio;

        this.demodt = {};
        this.demodt.formats = dateFormats;
        this.dateOptions = this.getDateOptions();

        this.demodttime = {};
        this.dateTimeOptions = this.dateTimeOptionsInit();
        this.demodttime.formats = ['DD/MM/YYYY hh:mm:ss', 'YYYY-MM-DD hh:mm', 'YYYY-MM-DDThh:mm', 'YYYY-MM-DD hh:mm:ss', 'YYYY-MM-DDThh:mm:ssZ', 'YYYY-MM-DD hh:mm P Z'];


        // this.controllerModalProxy.resetAllTemporyModels();
        this.initNyaSelectConformingSelectedControl();
        this.repeatSectionModel = this.controllerModalProxy.initRepeatSectionModel();
        this.repeatSectionOptions = this.controllerModalProxy.initRepeatSectionOptions();
        this.repeatSectionFields = this.initRepeatSectionFields();
        this.repeatSectionForm = this.controllerModalProxy.initRepeatSectionForm();
    }

    onSubmit() {
        alert(JSON.stringify(this.model), null, 2);
    }

    getDateOptions() {
        let dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            showWeeks: true,
            initDate: null
        };
        return dateOptions;
    }

    dateTimeOptionsInit() {
        return {
            formatYear: 'yy',
            startingDay: 1,
            showWeeks: true,
            initDate: null
        };
    }

    initNyaSelectConformingSelectedControl() {
        //place proxyModel to selection if not none :
        if (this.proxyModel.temporyConfig.selectedControl !== 'none') {
            for (let i = this.proxyModel.controls.length - 1; i >= 0; i--) {
                if (this.proxyModel.controls[i].id === this.proxyModel.temporyConfig.selectedControl) this.modelproxyModel = this.proxyModel.controls[i];
            }
            if (this.proxyModel.temporyConfig.selectedControl === 'BasicSelect') this.controllerModalProxy.bindBasicSelectFromProxyModel(this.basicSelectRowCollection);
            if (this.proxyModel.temporyConfig.selectedControl === 'oldGroupedSelect') this.controllerModalProxy.bindGroupedSelectFromProxyModel(this.groupedSelectRowCollection, this.GroupedSelectGroups);
            if (this.proxyModel.temporyConfig.selectedControl === 'GroupedSelect') this.controllerModalProxy.bindMultiSelectFromProxyModel(this.multiSelectRowCollection);
            if (this.proxyModel.temporyConfig.selectedControl === 'Radio') this.controllerModalProxy.bindRadioFromProxyModel(this.radioRowCollection);
            if (this.proxyModel.temporyConfig.selectedControl === 'RepeatSection') {
                this.repeatSectionModel = this.controllerModalProxy.initRepeatSectionModel();
                this.repeatSectionOptions = this.controllerModalProxy.initRepeatSectionOptions();
                this.repeatSectionFields = this.initRepeatSectionFields();
                this.repeatSectionForm = this.controllerModalProxy.initRepeatSectionForm();
            }
        }
    }

    updateSpecialControl() {
        //refresh service data for particular controls as selects and radio
        this.proxyModel.basicSelectRowCollection = this.basicSelectRowCollection;
        this.proxyModel.newOptionBasicSelect = this.newOptionBasicSelect;
        this.proxyModel.groupedSelectRowCollection = this.groupedSelectRowCollection;
        this.proxyModel.newOptionGroupedSelect = this.newOptionGroupedSelect;
        this.proxyModel.GroupedSelectGroups = this.GroupedSelectGroups;
        this.proxyModel.newGroupGroupedSelect = this.newGroupGroupedSelect;
        this.proxyModel.groupSelectGroupClick = this.groupSelectGroupClick;
        this.proxyModel.radioRowCollection = this.radioRowCollection;
        this.proxyModel.newOptionRadio = this.newOptionRadio;
        //force apply update proxyModel
        this.controllerModalProxy.bindSpecialCtrlTemporyModelsToProxyModel();
        return true;
    }

    resetTemporyConfig() {
        this.proxyModel.temporyConfig = {
            formlyLabel: '',
            formlyRequired: false,
            formlyPlaceholder: '',
            formlyDescription: '',
            formlyOptions: []
        };
    }

    resetControl() {
        this.proxyModel.temporyConfig.formlyLabel = '';
        this.proxyModel.temporyConfig.formlyRequired = false;
        this.proxyModel.temporyConfig.formlyPlaceholder = '';
        this.proxyModel.temporyConfig.formlyDescription = '';
        this.proxyModel.temporyConfig.formlyOptions = [];
        this.proxyModel.temporyConfig.datepickerPopup = this.initDatePicker();
        this.proxyModel.temporyConfig.datetimepickerPopup = this.initDateTimePicker();
    }

    initDatePicker() {
        this.proxyModel.temporyConfig.datepickerPopup = this.demodt.formats[0];
    }

    initDateTimePicker() {
        this.proxyModel.temporyConfig.datetimepickerPopup = this.demodttime.formats[0];
    }

    selectThisControl(controlName) {
        this.proxyModel.selectedControl = 'none';
        if (controlName == 'GroupedSelect') {
            if ($('.js-example-basic-multiple').is(':visible') == false) {
                this.controllerModalProxy.set_select2function();
            }
        }
        if (controlName == 'BasicSelect') {
            if ($('.js-example-basic-single').is(':visible') == false) {
                this.controllerModalProxy.set_select3function();
            }
        }
        this.resetTemporyConfig();
        for (let i = this.proxyModel.controls.length - 1; i >= 0; i--) {
            if (this.proxyModel.controls[i].id === controlName) {
                this.proxyModel.selectedControl = this.proxyModel.controls[i].id;
            }
        }
        if (this.proxyModel.selectedControl === 'Date') this.initDatePicker();
        if (this.proxyModel.selectedControl === 'DateTime') this.initDateTimePicker();
        if (controlName === 'RepeatSection') {
            this.repeatSectionModel = this.controllerModalProxy.initRepeatSectionModel();
            this.repeatSectionOptions = this.controllerModalProxy.initRepeatSectionOptions();
            this.repeatSectionFields = this.initRepeatSectionFields();
            this.repeatSectionForm = this.controllerModalProxy.initRepeatSectionForm();
        }
    }


    /**
     * ==============================================================
     * specific controls management
     * (display, properties.... : ex : grouped Select)
     * ==============================================================
     */
    addNewOptionRadio() {
        let result = this.$selectOptionMange.addNewOptionRadio(this.radioRowCollection, this.newOptionRadio.saisie);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: `'${this.newOptionRadio.saisie}' cannot be added.`,
                showCloseButton: true
            });
        }
        //reset input
        this.newOptionRadio = { saisie: '' };
    }

    removeRadioRow(index) {
        let result = this.$selectOptionMange.removeOption(this.radioRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Delete was cancelled.',
                showCloseButton: true
            });
        }
    }

    upThisRadioRow(index) {
        let result = this.$selectOptionMange.upthisOption(this.radioRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Operation cancelled.',
                showCloseButton: true
            });
        }
    }

    downThisRadioRow(index) {
        let result = this.$selectOptionMange.downthisOption(this.radioRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Operation cancelled.',
                showCloseButton: true
            });
        }
    }

    addNewOptionBasicSelect() {
        let result = this.$selectOptionMange.addNewOptionBasicSelect(this.basicSelectRowCollection, this.newOptionBasicSelect.saisie);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: `'${this.newOptionBasicSelect.saisie}' cannot be added.`,
                showCloseButton: true
            });
        }
        this.controllerModalProxy.set_select3function();
        this.newOptionBasicSelect = { saisie: '' }; //reset input
    }

    removeRow(index) {
        let result = this.$selectOptionMange.removeOption(this.basicSelectRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Delete was cancelled.',
                showCloseButton: true
            });
        }
        this.controllerModalProxy.set_select3function();
    }

    upThisRow(index) {
        let result = this.$selectOptionMange.upthisOption(this.basicSelectRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Operation cancelled.',
                showCloseButton: true
            });
        }
        this.controllerModalProxy.set_select3function();
    }

    downThisRow(index) {
        let result = this.$selectOptionMange.downthisOption(this.basicSelectRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Operation cancelled.',
                showCloseButton: true
            });
        }
        this.controllerModalProxy.set_select3function();
    }

    showGroupListToChoose() {
        this.groupSelectGroupClick.showList = !this.groupSelectGroupClick.showList;
    }

    addNewGroupToGroupedSelect() {
        if (this.newGroupGroupedSelect.saisie !== '') {
            for (let i = this.GroupedSelectGroups.list.length - 1; i >= 0; i--) {
                if (this.GroupedSelectGroups.list[i] === this.newGroupGroupedSelect.saisie) {
                    this.toaster.pop({
                        type: 'warning',
                        timeout: 2000,
                        title: 'Group already exists',
                        body: 'No group added.',
                        showCloseButton: true
                    });
                }
            }
            this.GroupedSelectGroups.list.push(this.newGroupGroupedSelect.saisie);
        } else {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: 'Not a valid group to add',
                body: 'No group added.',
                showCloseButton: true
            });
        }
        this.newGroupGroupedSelect.saisie = '';
    }


    addNewGroupToMultiSelect() {
        var enable_push = false;
        if (this.newGroupMultiSelect.saisie !== '') {
            for (let i = this.MultiSelectGroups.list.length - 1; i >= 0; i--) {
                if (this.MultiSelectGroups.list[i] === this.newGroupMultiSelect.saisie) {
                    this.toaster.pop({
                        type: 'warning',
                        timeout: 2000,
                        title: 'Group already exists',
                        body: 'No group added.',
                        showCloseButton: true
                    });
                }
            }
            this.MultiSelectGroups.list.push(this.newGroupMultiSelect.saisie);

            for (var i = 0; i < this.proxyModel.temporyConfig.multifilter.length; i++) {
                if (this.proxyModel.temporyConfig.multifilter[i].group == this.newGroupMultiSelect.saisie) {
                    enable_push = true;
                }
            }
            if (!enable_push) {
                const cconst = {
                    'group': this.newGroupMultiSelect.saisie
                };
                this.proxyModel.temporyConfig.multifilter.push(cconst);
            }
        } else {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: 'Not a valid group to add',
                body: 'No group added.',
                showCloseButton: true
            });
        }
        this.newGroupMultiSelect.saisie = '';
    }


    addNewOptionGroupedSelect() {
        let result = this.$selectOptionMange.addNewOptionGroupedSelect(this.groupedSelectRowCollection, this.newOptionGroupedSelect.saisie, '');
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: `'${this.newOptionGroupedSelect.saisie}' cannot be added.`,
                showCloseButton: true
            });
        }
        //bind nya : dont bind here $apply is not done fast enough
        //bindGroupedSelectToNya();
        //reset input
        this.newOptionGroupedSelect = { saisie: '' };
    }


    addNewOptionMultiSelect() {
        const result = this.$selectOptionMange.addNewOptionMultiSelect(this.multiSelectRowCollection, this.newOptionMultiSelect.saisie, '');
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: `'${this.newOptionMultiSelect.saisie}' cannot be added.`,
                showCloseButton: true
            });
        }
        this.controllerModalProxy.set_select2function();

        this.newOptionMultiSelect = {
            saisie: ''
        };
    }


    removeGroupedSelectRow(index) {
        let result = this.$selectOptionMange.removeOption(this.groupedSelectRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Delete was cancelled.',
                showCloseButton: true
            });
        }
    }

    removeMultiSelectRow(index) {
        const result = this.selectOptionMangage.removeOption(this.multiSelectRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Delete was cancelled.',
                showCloseButton: true
            });
        }
        this.controllerModalProxy.set_select2function();
    }

    upThisGroupedSelectRow(index) {
        let result = this.$selectOptionMange.upthisOption(this.groupedSelectRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Operation cancelled.',
                showCloseButton: true
            });
        }
    }


    upThisMultiSelectRow(index) {
        const result = this.selectOptionMangage.upthisOption(this.multiSelectRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Operation cancelled.',
                showCloseButton: true
            });
        }
        this.controllerModalProxy.set_select2function();
    }


    downThisGroupedSelectRow(index) {
        let result = this.$selectOptionMange.downthisOption(this.groupedSelectRowCollection, index);
        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Operation cancelled.',
                showCloseButton: true
            });
        }
    }


    downThisMultiSelectRow(index) {
        const result = this.selectOptionMangage.downthisOption(this.multiSelectRowCollection, index);

        if (result.resultFlag === false) {
            this.toaster.pop({
                type: 'warning',
                timeout: 2000,
                title: result.details,
                body: 'Operation cancelled.',
                showCloseButton: true
            });
        }
        this.controllerModalProxy.set_select2function();
    }


    today() {
        this.demodt.dt = new Date();
        this.demodttime = new Date();
    }


    clear() {
        this.demodt.dt = null;
        this.demodttime.dt = null;
    }


    open($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.demodt.opened = true;
    }

    openDateTimePicker($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.demodttime.opened = true;
    }

    initRepeatSectionFields() {
        return [{
            type: 'repeatSection',
            key: 'investments',
            templateOptions: {
                label: '',
                btnText: 'Add another investment',
                fields: [{
                        className: 'row',
                        fieldGroup: [{
                                className: 'col-xs-4',
                                type: 'input',
                                key: 'investmentName',
                                templateOptions: {
                                    label: 'Name of Investment',
                                    required: true
                                }
                            },
                            {
                                type: 'input',
                                key: 'investmentDate',
                                className: 'col-xs-4',
                                templateOptions: {
                                    label: 'Date of Investment:',
                                    placeholder: 'dd/mm/yyyy such as 20/04/2018',
                                    dateFormat: 'DD, d MM, yy'
                                }
                            },
                            {
                                type: 'input',
                                key: 'stockIdentifier',
                                className: 'col-xs-4',
                                templateOptions: {
                                    label: 'Stock Identifier:'
                                }
                            }
                        ]
                    },
                    {
                        "type": "radio",
                        "key": "type",
                        "templateOptions": {
                            "options": [{
                                    "name": "Text Field",
                                    "value": "input"
                                },
                                {
                                    "name": "TextArea Field",
                                    "value": "textarea"
                                },
                                {
                                    "name": "Radio Buttons",
                                    "value": "radio"
                                },
                                {
                                    "name": "Checkbox",
                                    "value": "checkbox"
                                }
                            ],
                            "label": "Field Type",
                            "required": true
                        }
                    },
                    {
                        type: 'input',
                        key: 'investmentValue',
                        templateOptions: {
                            label: 'Value:'
                        },
                        expressionProperties: {
                            'templateOptions.disabled': '!model.stockIdentifier'
                        }
                    },
                    {
                        type: 'checkbox',
                        model: 'formState',
                        key: 'selfExecuting',
                        templateOptions: {
                            label: 'Are you executing this trade?'
                        }
                    },
                    {
                        hideExpression: '!formState.selfExecuting',
                        fieldGroup: [{
                                type: 'input',
                                key: 'relationshipName',
                                templateOptions: {
                                    label: 'Name:'
                                }
                            },
                            {
                                type: 'select',
                                key: 'complianceApprover',
                                templateOptions: {
                                    label: 'Compliance Approver:',
                                    options: [{
                                            name: 'approver 1',
                                            value: 'some one 1'
                                        },
                                        {
                                            name: 'approver 2',
                                            value: 'some one 2'
                                        }
                                    ]
                                }
                            },
                            {
                                type: 'textarea',
                                key: 'requestorComment',
                                templateOptions: {
                                    label: 'Requestor Comment',
                                    rows: 4
                                }
                            }
                        ]
                    }
                ]
            }
        }];
    }

}

leftPanelController.$inject = [
    'toaster',
    '$timeout',
    '$selectOptionMange',
    'controllerModalProxy'
];

export default leftPanelController;

export {
    LEFT_PANEL_CONTROLLER,
    LEFT_PANEL_CONTROLLERAS
};