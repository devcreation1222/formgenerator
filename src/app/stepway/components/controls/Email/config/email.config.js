export const EmailConfig = {
    id: 'Email',
    name: 'Email',
    subtitle: 'Email',
    group: 'input',
    formlyType: 'input',
    formlySubtype: 'email',
    formlyLabel: '',
    formlyRequired: false,
    formlyDescription: '',
    formlyOptions: [],
    formlyExpressionProperties: {},
    formlyValidators: {},
    formlyValidation: {
        messages: {
            required: function(viewValue, modelValue, scope) {
                const defaultReturnMsg = 'this Email field is required';
                const returnMsg = (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
                if (scope.to.required) return returnMsg;
            }
        }
    }
};