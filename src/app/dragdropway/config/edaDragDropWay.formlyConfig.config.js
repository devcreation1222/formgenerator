function formlyConfig(formlyConfigProvider, EasyFormGenFormlyBindingModelsProvider, easyFormDragWayConfigProvider) {

    formlyConfigProvider.setType({
        name: 'blank',
        template: '<div></div>'
    });

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'empty',
        name: 'no control',
        subtitle: 'no control',
        group: 'Blank',
        formlyType: 'blank',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });

    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        label: `<div class="col-md-12">
          <div class="form-group">
            <div class="">
            </div>
          </div>
      </div>`,
        control: 'empty',
        cssClass: 'col-xs-12'
    }, {
        addToGroupCtrl: 'blank'
    });

    formlyConfigProvider.setType({
        name: 'subTitle',
        template: subTitleTemplate
    });

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'Header',
        name: 'Header',
        subtitle: 'no control',
        group: 'Decoration',
        formlyType: 'header',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });


    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        label: [
            `<div class="col-md-12">
          <div class="form-group">
            <div class="">
              <h2 class="text-center">Header</h2>
              <hr/>
            </div>
          </div>
      </div>`
        ].join(''),
        control: 'Header',
        cssClass: 'col-xs-12'
    }, {
        addToGroupCtrl: 'headers'
    });


    const subTitleTemplate = `
    <div class="row">
      <div class="">
        <h4 class="text-center">{{options.templateOptions.placeholder}}<h4>
        <hr/>
      </div>
    </div>`;

    formlyConfigProvider.setType({
        name: 'subTitle',
        template: subTitleTemplate
    });

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'Subtitle',
        name: 'Subtitle',
        subtitle: 'no control',
        group: 'Decoration',
        formlyType: 'subTitle',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });

    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        'label': `<div class="col-md-12">
          <div class="form-group">
            <div class="">
              <h4 class="text-center">SubTitle</h4>
              <hr/>
            </div>
          </div>
      </div>`,
        'control': 'Subtitle',
        'cssClass': 'col-xs-12'
    }, {
        addToGroupCtrl: 'headers'
    });

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'TextInput',
        name: 'Text input',
        subtitle: 'Text input',
        group: 'input',
        formlyType: 'input',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });


    /**
     * drag and drop text input (basic) control template
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        'label': `<div class="col-md-12">
          <div class="form-group">
            <label for="inputText" class="control-label textControlLabel pull-left">
              title for text input<span class="textControlLabel ng-scope">*</span>
            </label>
            <div class="">
              <input type="text" disabled class="form-control fakeControl" id="inputText" placeholder="basic input">
              <p class="help-block pull-left">Description</p>
            </div>
          </div>
        </div>`,
        'control': 'TextInput',
        'cssClass': 'col-xs-12'
    }, {
        addToGroupCtrl: 'inputs'
    });

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'NumberInput',
        name: 'Number input',
        subtitle: 'Number input',
        group: 'input',
        formlyType: 'input',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });


    /**
     * drag and drop number input (basic) control template
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        'label': `<div class="col-md-12">
          <div class="form-group">
            <label for="inputNumber" class="control-label textControlLabel pull-left">
              title for number input<span class="textControlLabel ng-scope">*</span>
            </label>
            <div class="">
              <input type="number" disabled class="form-control fakeControl" id="inputNumber" placeholder="basic input">
              <p class="help-block pull-left">Description</p>
            </div>
          </div>
        </div>`,
        'control': 'NumberInput',
        'cssClass': 'col-xs-12'
    }, {
        addToGroupCtrl: 'inputs'
    });

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'Email',
        name: 'Email',
        subtitle: 'Email',
        group: 'input',
        formlyType: 'input',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });


    /**
     * drag and drop email input (basic) control template
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        'label': `<div class="col-md-12">
        <div class="form-group">
          <label for="inputEmail" class="control-label textControlLabel pull-left">
            title for email input<span class="textControlLabel ng-scope">*</span>
          </label>
          <div class="">
            <input type="email" disabled class="form-control fakeControl" id="inputEmail" placeholder="basic input">
            <p class="help-block pull-left">Description</p>
          </div>
        </div>
      </div>`,
        'control': 'Email',
        'cssClass': 'col-xs-12'
    }, {
        addToGroupCtrl: 'inputs'
    });
    /**
     * Add text input (Password)
     *
     * note : formly template already exists
     * no need to create a custom one
     *
     * just declare in EasyFormGenFormlyBindingModelsProvider
     */
    // EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
    //     id 								: 'Password',
    //     name 							: 'Password',
    //     subtitle 					: 'Password',
    //     group 						: 'input',
    //     formlyType 				: 'input',
    //     formlySubtype 		: 'password',
    //     formlyLabel 			: '',
    //     formlyRequired 		: false,
    //     formlyDescription 	: '',
    //     formlyOptions 		: []
    //   }
    // );
    /**
     * drag and drop text input — password —control template
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    // easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
    //     'label' 	:
    //       `<div class="col-md-12">
    //         <div class="form-group">
    //           <label for="inputPass" class="control-label textControlLabel ng-binding pull-left">
    //           title for password input<span class="textControlLabel ng-scope">*</span>
    //           </label>
    //           <div class="">
    //             <input type="password" disabled class="form-control fakeControl" id="inputPass" placeholder="password input">
    //             <p class="help-block ng-binding pull-left">Description</p>
    //           </div>
    //         </div>
    //       </div>`,
    //     'control'	: 'Password',
    //     'cssClass': 'col-xs-12'
    //   },
    //   {
    //     addToGroupCtrl : 'inputs'
    //   }
    // );

    /**
     * Add angular UI date picker
     *
     * thx Kent C. Dodds for formly config template (since it was a huge config)
     */
    const attributes = [
        'date-disabled',
        'custom-class',
        'show-weeks',
        'starting-day',
        'init-date',
        'min-mode',
        'max-mode',
        'format-day',
        'format-month',
        'format-year',
        'format-day-header',
        'format-day-title',
        'format-month-title',
        'year-range',
        'shortcut-propagation',
        'uib-datepicker-popup',
        'show-button-bar',
        'current-text',
        'clear-text',
        'close-text',
        'close-on-date-selection',
        'datepicker-append-to-body'
    ];

    const bindings = [
        'datepicker-mode',
        'min-date',
        'max-date'
    ];

    let ngModelAttrs = {};

    angular.forEach(attributes, (attr) => ngModelAttrs[camelize(attr)] = { attribute: attr });
    angular.forEach(bindings, (binding) => ngModelAttrs[camelize(binding)] = { bound: binding });

    function camelize(string) {
        string = string.replace(/[\-_\s]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '');
        // Ensure 1st char is always lowercase
        return string.replace(/^([A-Z])/, (match, chr) => chr ? chr.toLowerCase() : '');
    }

    const angularUIDatePickerTemplate = `
        <p class="input-group">
            <span class="input-group-btn">
                <button
                    type="button"
                    class="btn btn-default"
                    ng-click="datepicker.open($event)">
                    <i class="glyphicon glyphicon-calendar"></i>
                </button>
            </span>
            <input
                type="text"
                id="{{::id}}"
                name="{{::id}}"
                ng-model="model[options.key]"
                class="form-control"
            />
        </p>
    `;

    const angularUIDateTimePickerTemplate = `
        <p class="input-group">
            <span class="input-group-btn">
                <button
                    type="button"
                    class="btn btn-default"
                    ng-click="datepicker.open($event)">
                    <i class="glyphicon glyphicon-calendar"></i>
                </button>
            </span>
            <input
                type="text"
                id="{{::id}}"
                name="{{::id}}"
                ng-model="model[options.key]"
                class="form-control"
            />
        </p>
    `;

    formlyConfigProvider.setType({
        name: 'datepicker',
        template: angularUIDatePickerTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        link: function(scope, element, attrs, ngModelCtrl) {
            const parent = $(element).parent();
            const dpickerDiv = $(element).find(".input-group input");
            window.setTimeout(function() {
                const dpicker = dpickerDiv.datepicker({
                    startDate: scope.options.templateOptions.datepickerOptions.startDate
                });
                dpicker.on('show', function(e) {
                    scope.model[scope.options.key] = moment(e.date).format('MM/DD/YYYY');
                    scope.$apply();
                });
            }, 100);
        },
        controller: ['$scope', ($scope) => {
            $scope.datepicker = {};
            // make sure the initial value is of type DATE!
            const currentModelVal = $scope.model[$scope.options.key] || '';
            if (typeof(currentModelVal) == 'string') {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!

                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }
                var today = mm + '/' + dd + '/' + yyyy;
                $scope.model[$scope.options.key] = today;
            }
            $scope.datepicker.opened = false;
            $scope.datepicker.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.datepicker.opened = !$scope.datepicker.opened;
            };
        }],
        defaultOptions: {
            ngModelAttrs: ngModelAttrs,
            templateOptions: {
                datepickerOptions: {
                    format: 'mm/dd/yyyy',
                    startDate: '-3d'
                }
            }
        }
    });
    formlyConfigProvider.setType({
        name: 'datetimepicker',
        template: angularUIDateTimePickerTemplate,
        defaultOptions: {
            ngModelAttrs: ngModelAttrs,
            templateOptions: {
                datetimepickerOptions: {
                    format: 'DD/MM/YYYY hh:mm:ss',
                    initDate: new Date(),
                    showWeeks: false
                }
            }
        },
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        link: function(scope, element, attrs, ngModelCtrl) {
            const parent = $(element).parent();
            const datepickerDiv = $(element).find(".input-group input");
            window.setTimeout(function() {
                const dtp = datepickerDiv.datetimepicker({
                    format: scope.options.templateOptions.datetimepickerOptions.format
                });
                dtp.on("dp.change", function(e) {
                    scope.model[scope.options.key] = moment(e.date).format(scope.options.templateOptions.datetimepickerOptions.format);
                    scope.$apply();
                });
            }, 100);
        },
        controller: ['$scope', ($scope) => {
            $scope.datetimepicker = {};
            const currentModelVal = $scope.model[$scope.options.key] || '';
            if (typeof(currentModelVal) == 'string') {
                $scope.model[$scope.options.key] = moment(new Date(currentModelVal)).format($scope.options.templateOptions.datetimepickerOptions.format);
            }
            $scope.datetimepicker.opened = false;
            $scope.datetimepicker.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.datetimepicker.opened = !$scope.datepicker.opened;
            };
        }]
    })

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'Date',
        name: 'Date',
        subtitle: 'Date',
        group: 'input',
        formlyType: 'datepicker',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: [],
        datepickerPopup: 'dd-MMMM-yyyy'
    });
    /**
     * drag and drop text input — date — control template (using angular UI datepicker)
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        label: `
    <div class="col-md-12">
      <div class="form-group">
        <label for="inputDate" class="control-label textControlLabel ng-binding pull-left">
         title for date input<span class="textControlLabel ng-scope">*</span>
        </label>
        <div class="col-xs-12 col-sm-12 col-md-12 demoddDatepicker">
					<div class="input-group">
  					<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
  					<input type="text" disabled class="form-control fakeControl">
					</div>
				</div>
        <p class="help-block pull-left">description</p>
      </div>
     </div>`,
        control: 'Date',
        cssClass: 'col-xs-12'
    }, {
        addToGroupCtrl: 'inputs'
    });

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'DateTime',
        name: 'DateTime',
        subtitle: 'DateTime',
        group: 'input',
        formlyType: 'datetimepicker',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: [],
        datepickerPopup: 'dd-MMMM-yyyy hh:mm:ss'
    });
    /**
     * drag and drop text input — date — control template (using angular UI datepicker)
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        label: `
    <div class="col-md-12">
      <div class="form-group">
        <label for="inputDateTime" class="control-label textControlLabel ng-binding pull-left">
         title for datetime input<span class="textControlLabel ng-scope">*</span>
        </label>
        <div class="col-xs-12 col-sm-12 col-md-12 demoddDatTimeepicker">
					<div class="input-group">
  					<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
  					<input type="text" disabled class="form-control fakeControl">
					</div>
				</div>
        <p class="help-block pull-left">description</p>
      </div>
     </div>`,
        control: 'DateTime',
        cssClass: 'col-xs-12'
    }, {
        addToGroupCtrl: 'inputs'
    });

    /**
     * Add textarea
     *
     * note : formly template already exists
     * no need to create a custom one
     *
     * just declare in EasyFormGenFormlyBindingModelsProvider
     */
    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'Texarea',
        name: 'Textarea',
        subtitle: 'Textarea',
        group: 'Textarea',
        formlyType: 'textarea',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });
    /**
     * drag and drop textarea control template
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        'label': `
      <div class="col-md-12">
          <div class="form-group">
            <label for="textArea" class="control-label
      							textControlLabel pull-left">title for textarea <span class="textControlLabel">*</span></label>
            <div class="">
              <textarea disabled class="form-control dragItemtextarea fakeControl" ng-model="model[options.key]" rows="1" id="textArea"></textarea>
              <p class="help-block pull-left">description</p>
            </div>
          </div>
      </div>`,
        'control': 'Texarea',
        'cssClass': 'col-xs-12'
    }, {
        addToGroupCtrl: 'textareas'
    });

    /**
     * Add rich text editor control (using textAngular)
     *
     */
    let richTexEditorTemplate = `
    <text-angular name="{{id}}"
                  class="richTextAngular"
                  ng-model="model[options.key || index]">
    </text-angular>`;

    formlyConfigProvider.setType({
        name: 'richEditor',
        template: richTexEditorTemplate
    });

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'RichTextEditor',
        name: 'RichTextEditor',
        subtitle: 'RichTextEditor',
        group: 'Textarea',
        formlyType: 'richEditor',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });
    /**
     * drag and drop rich text editor control template (using textAngular)
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        label: `
      <div class="col-md-12">
          <div class="form-group">
            <label for="textArea" class="control-label
      							textControlLabel pull-left">title for rich text editor <span class="textControlLabel">*</span></label>
            <div class="">
              <textarea disabled class="form-control dragItemtextarea fakeControl" ng-model="model[options.key]" rows="1" id="textArea"></textarea>
              <p class="help-block">description</p>
            </div>
          </div>
      </div>`,
        control: 'RichTextEditor',
        cssClass: 'col-xs-12'
    }, {
        addToGroupCtrl: 'textareas'
    });

    /**
     * Add radio
     *
     * note : formly template already exists
     * no need to create a custom one
     *
     * just declare in EasyFormGenFormlyBindingModelsProvider
     */
    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'Radio',
        name: 'Radio',
        subtitle: 'Radio',
        options: [],
        group: 'Radio',
        formlyType: 'radio',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });
    /**
     * drag and drop radio control template (using textAngular)
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        'label': `
      <div class="col-md-12">
        <div class="form-group">
          <label for="vertRadio" class="control-label textControlLabel pull-left">title for radio <span class="textControlLabel">*</span></label>
          <div class="interligne"></div>
          <div class="pull-left">
            <div class="radio">
              <label class="fakeCheck">
                <input type="radio" disabled name="optionsRadios" class="fakeCheck" id="optionsRadio-0" value="verticalRadio0" checked="">
                option1
              </label>
            </div>
            <div class="radio">
              <label class="fakeCheck">
                <input type="radio" disabled name="optionsRadios" class="fakeCheck"  id="optionsRadio-1" value="verticalRadio1" checked="">
                option2
              </label>
            </div>
            <p class="help-block pull-left">description</p>
          </div>
        </div>
      </div>`,
        'control': 'Radio',
        'cssClass': 'col-xs-12'
    }, {
        addToGroupCtrl: 'radios'
    });

    /**
     * Add checkbox
     *
     * note : formly template already exists
     * no need to create a custom one
     *
     * just declare in EasyFormGenFormlyBindingModelsProvider
     */
    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'Checkbox',
        name: 'Checkbox',
        subtitle: 'Checkbox',
        group: 'Checkbox',
        formlyType: 'checkbox',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });
    /**
     * drag and drop checkbox control template (using textAngular)
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        label: `
    <div class="col-md-12">
      <div class="checkbox">
        <label class="fakeCheck">
          <input type="checkbox" disabled class="fakeCheck" id="checkBox">
      		<span class="blackText ng-binding">label for checkbox </span>
      		<span class="textControlLabel ng-scope">*</span>
        </label>
      </div>
      <p class="help-block ng-binding">description</p>
    </div>`,
        control: 'Checkbox',
        cssClass: 'col-xs-12'
    }, {
        addToGroupCtrl: 'checkboxes'
    });

    /**
     * Add basic Select control
     *
     * using nya-bs-select
     */
    let basicSelectTemplate = `
    <select
        id="{{generatedId}}"
        class="js-example-basic-single col-sm-12 col-xs-12 col-md-12 col-lg-12"
        ng-model="model[options.key]"
        ng-disabled="options.templateOptions.options.length === 0">
        <option
            ng-repeat="option in options.templateOptions.options"
            value="{{option.name}}">
            {{option.name}}
        </option>
    </select>
    `;

    formlyConfigProvider.setType({
        name: 'basicSelect',
        template: basicSelectTemplate,
        // wrapper: ['boostrapLabel', 'bootstrapHasError'],
        link: function(scope, element, attrs, ngModelCtrl) {
            window.setTimeout(function() {
                const all = $(element).find("select#" + $(element).find("select").attr("id"));
                const select = $(element).find("select");
                const sel = select.select2({ width: '100%' });
                sel.on('select2:select', function(e) {
                    scope.model[scope.options.key] = sel.val();
                    scope.$apply();
                });
                sel.on('select2:unselect', function(e) {
                    scope.model[scope.options.key] = sel.val();
                    scope.$apply();
                });
            }, 10);
        },
        controller: function($scope) {
            $scope.generatedId = "basicselect_" + new Date().getMilliseconds() + '_' + getRandomInt(100, 1000000);

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        }
    });

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'BasicSelect',
        name: 'Basic select',
        subtitle: 'Basic select',
        options: [],
        group: 'Select',
        formlyType: 'basicSelect',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });

    /**
     * drag and drop basic select control template (using textAngular)
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        label: `
      <div class="col-md-12">
        <div class="form-group">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 selectfordemo">

      <ol class="nya-bs-select col-xs-12 col-sm-12 col-md-12 col-lg-12 ng-valid btn-group ng-dirty ng-valid-parse ng-touched"
      	ng-model="fakeModelNyaSelectBasic"
      	data-live-search="false">

         <button class="btn btn-default dropdown-toggle" disabled type="button">
      		 <span class="pull-left filter-option">
      			 <span class="ng-binding">Basic select</span>
      		</span>
      		&nbsp;<span class="caret"></span>
        </button>

      </div>
      </div>`,
        control: 'BasicSelect',
        cssClass: 'col-xs-12'
    }, {
        addToGroupCtrl: 'selects'
    });

    /**
     * Add Grouped Select control
     *
     * using nya-bs-select
     */
    let groupedSelectTemplate = `
        <select multiple id="{{generatedId}}" class="js-example-basic-multiple col-sm-12 col-xs-12 col-md-12 col-lg-12"
            ng-model="model[options.key]"
            ng-disabled="DisplayOptions.length == 0">
            <div>
                <optgroup ng-repeat="group in DisplayOptions" label="{{group.group}}">
                    <option ng-repeat="option in group.options" value="{{option}}">
                        {{option}}
                    </option>
                </optgroup>
            </div>
        </select>
    `;

    formlyConfigProvider.setType({
        name: 'groupedSelect',
        template: groupedSelectTemplate,
        // wrapper: ['boostrapLabel', 'bootstrapHasError'],
        link: function(scope, element, attrs, ngModelCtrl) {
            window.setTimeout(function() {
                const all = $(element).find("select#" + $(element).find("select").attr("id"));
                const select = $(element).find("select");
                const sel = select.select2({ width: '100%' });
                sel.on('select2:select', function(e) {
                    scope.model[scope.options.key] = sel.val();
                    scope.$apply();
                });
                sel.on('select2:unselect', function(e) {
                    scope.model[scope.options.key] = sel.val();
                    scope.$apply();
                });
            }, 10);
        },
        controller: function($scope) {
            $scope.generatedId = "multiselect_" + new Date().getMilliseconds() + '_' + getRandomInt(100, 1000000);
            const _groups = $scope.options.templateOptions.options
                .sort(function(a, b) {
                    if (a.order > b.order) {
                        return 1;
                    }
                    if (a.order < b.order) {
                        return -1;
                    }
                    return 0;
                }).reduce((groups, option) => {
                    if (!(option.group in groups)) {
                        groups[option.group] = [];
                    }
                    groups[option.group].push(option.option);
                    return groups;
                }, {});
            $scope.DisplayOptions = Object.keys(_groups).map(k => Object.assign({}, {
                group: k,
                options: _groups[k]
            }));

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        }
    });

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'GroupedSelect',
        name: 'Grouped Select',
        subtitle: 'Grouped Select',
        options: [],
        group: 'Select',
        formlyType: 'groupedSelect',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });
    /**
     * drag and drop grouped select control template (using textAngular)
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        label: `
      <div class="col-md-12">
          <div class="form-group">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 selectfordemo">
      <ol class="nya-bs-select col-xs-12 col-sm-12 col-md-12 col-lg-12 ng-valid btn-group ng-dirty ng-valid-parse ng-touched"
      	ng-model="fakeModelNyaSelectBasic"
      	data-live-search="false">
         <button class="btn btn-default dropdown-toggle" disabled type="button">
      		 <span class="pull-left filter-option">
      			 <span class="ng-binding">Grouped select</span>
      		</span>
      		&nbsp;<span class="caret"></span>
      </button>
      </div>
      </div>`,
        control: 'GroupedSelect',
        cssClass: 'col-xs-12'
    }, {
        addToGroupCtrl: 'selects'
    });

    /**
     * Add Repeact Section
     *
     * using nya-bs-select
     */
    let repeatSectionTemplate = `
        <div>
            <div
                class="repeatsection"
                ng-repeat="element in model[options.key]"
                ng-init="elemfields = copyFields(fields)">
                <formly-form fields="elemfields"
                    model="element"
                    form="form">
                </formly-form>
                <div style="margin-bottom:20px;">
                    <button type="button" class="btn btn-sm btn-danger" ng-click="model[options.key].splice($index, 1)">
                        Remove
                    </button>
                </div>
                <hr/>
            </div>
            <p class="AddNewButton">
                <button type="button" class="btn btn-primary" ng-click="addNew()">ADD ANOTHER INVESTMENT</button>
            </p>
        </div>
    `;

    formlyConfigProvider.setType({
        name: 'repeatSection',
        template: repeatSectionTemplate,
        // wrapper: ['boostrapLabel', 'bootstrapHasError'],
        controller: function($scope) {
            let unique = 0;
            $scope.fields = [];
            if ($scope.options.templateOptions.options && $scope.options.templateOptions.options.length > 0) {
                $scope.model[$scope.options.key] = $scope.options.templateOptions.options[0];
            }
            if ($scope.options.templateOptions.options && $scope.options.templateOptions.options.length > 1) {
                $scope.fields = $scope.options.templateOptions.options[1].fields;
                $scope.btnText = $scope.options.templateOptions.options[1].btnText;
            }

            $scope.copyFields = copyFields;
            $scope.addNew = addNew;

            function copyFields(fields) {
                fields = angular.copy(fields);
                addRandomIds(fields);
                return fields;
            }

            function addNew() {
                $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
                var repeatsection = $scope.model[$scope.options.key];
                var lastSection = repeatsection[repeatsection.length - 1];
                var newsection = {};
                if (lastSection) {
                    newsection = angular.copy(lastSection);
                }
                repeatsection.push(newsection);
            }

            function addRandomIds(fields) {
                unique++;
                angular.forEach(fields, function(field, index) {
                    if (field.fieldGroup) {
                        addRandomIds(field.fieldGroup);
                        return;
                    }

                    if (field.templateOptions && field.templateOptions.fields) {
                        addRandomIds(field.templateOptions.fields);
                    }

                    field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
                });
            }

            function getRandomInt(min, max) {
                return Math.floor(Math.random() + (max - min)) + min;
            }
        }
    });

    let editRepeatSectionTemplate = `
        <div ng-if="options && options.key === 'investments'">
            <div class="repeatsection" ng-repeat="element in model[options.key]" ng-init="elemfields = copyFields(to.fields)">
                <formly-form fields="elemfields"
                             model="element"
                             form="form">
                </formly-form>
                <div style="margin-bottom:20px;">
                    <button type="button" class="btn btn-sm btn-danger" ng-click="model[options.key].splice($index, 1)">
                        Remove
                    </button>
                </div>
                <hr/>
            </div>
            <p class="AddNewButton">
                <button type="button" class="btn btn-primary" ng-click="addNew()">Add Another Inverstment</button>
            </p>
        
        </div>
    `;

    formlyConfigProvider.setType({
        name: 'editRepeatSection',
        template: editRepeatSectionTemplate.tempalte,
        controller: function($scope) {
            let unique = 0;
            $scope.copyFields = copyFields;
            $scope.addNew = addNew;

            function copyFields(fields) {
                fields = angular.copy(fields);
                addRandomIds(fields);
                return fields;
            }

            function addNew() {
                $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
                var repeatsection = $scope.model[$scope.options.key];
                var lastSection = repeatsection[repeatsection.length - 1];
                var newsection = {};
                if (lastSection) {
                    newsection = angular.copy(lastSection);
                }
                repeatsection.push(newsection);
            }

            function addRandomIds(fields) {
                unique++;
                angular.forEach(fields, function(field, index) {
                    if (field.fieldGroup) {
                        addRandomIds(field.fieldGroup);
                        return;
                    }

                    if (field.templatOptions && field.templatOptions.fields) {
                        addRandomIds(field.templateOptions.fields);
                    }

                    field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
                });
            }

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        }
    })

    EasyFormGenFormlyBindingModelsProvider.addEasyFormControlToList({
        id: 'RepeatSection',
        name: 'RepeatSection',
        subtitle: '4         ',
        options: [],
        group: 'RepeatSection',
        formlyType: 'repeatSection',
        formlySubtype: '',
        formlyLabel: '',
        formlyRequired: false,
        formlyDescription: '',
        formlyOptions: []
    });
    /**
     * drag and drop repeat section template (using textAngular)
     *
     *
     * @PARAM 1 : control template object (drag an drop)
     * @PARAM 2 : object to indicates in which group of control it will be inserted
     *  					(related to _dragDropConfigModel.containerConfig.decoration in dragDropConfig provider)
     */
    easyFormDragWayConfigProvider.addControlToDragDropPresentationModel({
        label: `
      <div class="col-md-12">
          <div class="form-group">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 selectfordemo">
      <ol class="nya-bs-select col-xs-12 col-sm-12 col-md-12 col-lg-12 ng-valid btn-group ng-dirty ng-valid-parse ng-touched"
      	ng-model="fakeModelNyaSelectBasic"
      	data-live-search="false">
         <button class="btn btn-default dropdown-toggle" disabled type="button">
      		 <span class="pull-left filter-option">
      			 <span class="ng-binding">Repeat Section</span>
      		</span>
      		&nbsp;<span class="caret"></span>
      </button>
      </div>
      </div>`,
        control: 'RepeatSection',
        cssClass: 'col-xs-12'
    }, {
        addToGroupCtrl: 'repeatsection'
    });

}

formlyConfig.$inject = [
    'formlyConfigProvider',
    'EasyFormGenFormlyBindingModelsProvider',
    'easyFormDragWayConfigProvider'
];

export default formlyConfig;