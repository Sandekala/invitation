module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
    'unused-imports',
    'vue',
    'align-assignments',
  ],
  rules: {
    'import/no-named-as-default'         : 'off',
    'vue/script-setup-uses-vars'         : 'error',
    'vue/multi-word-component-names'     : 'off',
    'vue/no-multiple-template-root'      : 'off',
    '@typescript-eslint/no-explicit-any' : 'off',
    'vue/no-v-model-argument'            : 'off',
    'vue/no-v-for-template-key'          : 'off',
    'comma-dangle'                       : 'off',
    'align-assignments/align-assignments': [2, { requiresOnly: false }],
    'curly'                              : ['error', 'multi-or-nest'],
    'quote-props'                        : ['error', 'consistent-as-needed'],
    'object-property-newline'            : ['error', { allowAllPropertiesOnSameLine: true }],
    'object-curly-spacing'               : ['error', 'always'],
    '@typescript-eslint/comma-dangle'    : ['error', 'always-multiline'],
    'indent'                             : [
      'error',
      2,
      {
        SwitchCase        : 1,
        VariableDeclarator: 1,
        outerIIFEBody     : 1,
      },
    ],
    'quotes': [
      'error',
      'single',
      {
        avoidEscape          : true,
        allowTemplateLiterals: true,
      },
    ],
    'key-spacing': [
      'error',
      {
        align: {
          beforeColon: false,
          afterColon : true,
          on         : 'colon',
        },
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline : 'never',
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          VariableDeclarator  : true,
          AssignmentExpression: true,
        },
      },
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems : 3,
      },
    ],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems : 3,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline    : true,
          minProperties: 3,
        },
        ObjectPattern    : { consistent: true },
        ImportDeclaration: {
          multiline    : true,
          minProperties: 3,
          consistent   : true,
        },
        ExportDeclaration: 'always',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter  : 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter  : 'comma',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],
  },
}
