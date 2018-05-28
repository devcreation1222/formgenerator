export const EDIT_BASIC_SELECT_COMPONENT = 'editBasicSelectControl';

export const editBasicSelectControlComponent = {
    template: `
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="row">
        <div class="col-md-12">
          <h5 class="greyText">
            <i class="fa fa-eye"></i>
            &nbsp;
            {{'PREVIEW_TAB' | translate}} :
          </h5>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label
              for="basicSelect"
              class="control-label textControlLabel">
              {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
              <span
                ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                class="textControlLabel">
                *
              </span>
            </label>
            <div class="">
              <select
                class="js-example-basic-single col-sm-12 col-xs-12 col-md-12 col-lg-12"
                ng-model="$ctrl.modelbasicSelect"
                id="basicSelect"
                ng-disabled="$ctrl.basicSelectRowCollection.rows.length === 0">
                  <option ng-repeat="basicSelectRow in $ctrl.basicSelectRowCollection.rows" value="$index" >
                    {{basicSelectRow.option}}
                  </option>
              </select>
              <p class="help-block">
                {{$ctrl.nyaSelect.temporyConfig.formlyDescription}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="row">
        <div class="col-md-12">
          <h5 class="greyText">
            <i class="fa fa-pencil-square-o"></i>
            &nbsp;
            {{'EDIT_PROPERTIES' | translate}} :
          </h5>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <label
            for="basicSelectRowCollection"
            class=" control-label greyText editPropertiesLabel">
            {{'ADD_NEW_OPTIONS' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="form-group">
            <div class="col-sm-9 col-xs-9 col-md-9 col-lg-9">
            <input
              type="text"
              class="form-control"
              id="inputAddNewBasicOption"
              placeholder="{{'ADD_A_NEW_OPTION' | translate}}"
              ng-model="$ctrl.newOptionBasicSelect.saisie">
            </div>
            <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
              <button
                class="btn btn-primary"
                ng-click="$ctrl.addNewOptionBasicSelect()">
                {{'ADD' | translate}}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <label class=" control-label greyText editPropertiesLabel">
            {{'EDIT_REMOVE_OPTIONS' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div class="form-group">
          <div class-"col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="container">
              <div ng-if="$ctrl.basicSelectRowCollection.rows.length === 0">
                <h5 class="text-center greyText">
                  <em>
                    - {{'NO_OPTION_ADD_NEW' | translate}} -
                  </em>
                </h5>
              </div>
              <table
                ng-if="$ctrl.basicSelectRowCollection.rows.length > 0"
                class="table table-striped">
                <thead>
                  <tr>
                    <th st-ratio="20">
                      {{'ORDER' | translate}}
                    </th>
                    <th st-ratio="55">
                      {{'OPTION' | translate}}
                    </th>
                    <th st-ratio="25">
                    </th>
                  </tr>
                  <tr>
                    <th st-ratio="20">
                    </th>
                    <th st-ratio="55">
                      <input
                        ng-model="$ctrl.basicSelectFilter"
                        placeholder="{{'SEARCH_4_OPTION' | translate}}"
                        class="input-sm form-control"
                        type="search"
                      />
                    </th>
                    <th st-ratio="25">
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr ng-repeat="basicSelectRow in $ctrl.basicSelectRowCollection.rows | filter:$ctrl.basicSelectFilter as basicSelectRow">
                      <td st-ratio="20">
                        {{$index}}
                      </td>
                      <td st-ratio="55">
                        {{basicSelectRow.option}}
                      </td>
                      <td st-ratio="25">
                        <div class="pull-right">
                          <button
                            class="btn btn-primary"
                            ng-click="$ctrl.upThisRow({index: $index})">
                            <i class="fa fa-arrow-up"></i>
                          </button>
                          <button
                            class="btn btn-primary"
                            ng-click="$ctrl.downThisRow({index: $index})">
                            <i class="fa fa-arrow-down"></i>
                          </button>
                          <button
                            class="btn btn-danger"
                            ng-click="$ctrl.removeRow({index: $index})">
                            <i class="fa fa-trash-o"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="form-group">
            <label
              for="inputTextLabelUpdate"
              class="col-lg-3 control-label greyText editPropertiesLabel">
              {{'LABEL_TEXT' | translate}} :
            </label>
            <div class="col-lg-9">
              <input
                type="text"
                class="form-control"
                ng-model="$ctrl.nyaSelect.temporyConfig.formlyLabel"
                id="inputTextLabelUpdate"
                placeholder="{{'ADD_EDIT_LABEL_HERE' | translate}}">
            </div>
          </div>
        </div>
        <div class="marginTopFivepixels"></div>
        <div class="row">
          <div class="form-group">
            <label
              for="inputTextRequiredUpdate"
              class="col-lg-3 control-label greyText editPropertiesLabel">
              Required :
            </label>
            <div class="col-lg-9">
              <div class="checkboxCssCorrection">
                &nbsp;
              </div>
              <input
                type="checkbox"
                ng-model="nyaSelect.temporyConfig.formlyRequired"
                id="inputTextRequiredUpdate">
            </div>
          </div>
        </div>
        <div class="marginTopFivepixels"></div>
        <div class="row">
          <div class="form-group">
            <label
              for="inputTextDescriptionUpdate"
              class="col-lg-3 control-label greyText editPropertiesLabel">
              {{'DESCRIPTION' | translate}} :
            </label>
            <div class="col-lg-9">
              <input
                type="text"
                class="form-control"
                ng-model="$ctrl.nyaSelect.temporyConfig.formlyDescription"
                id="inputTextDescriptionUpdate"
                placeholder="{{'ADDEDIT_DESCRIPTION' | translate}}">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
    bindings: {
        nyaSelect: '=',
        basicSelectRowCollection: '=',
        newOptionBasicSelect: '=',
        addNewOptionBasicSelect: '&',
        upThisRow: '&',
        downThisRow: '&',
        removeRow: '&'
    },
    controller: class editBasicSelectController {
        static $inject = [];

        constructor() {

        }
    }
};

const editBasicSelectModuleName = 'stepway.editBasicSelect.module';
export default angular
    .module(editBasicSelectModuleName, [])
    .component(EDIT_BASIC_SELECT_COMPONENT, editBasicSelectControlComponent);