import * as string from './type_string';
import * as regexp from './type_regexp';
import * as object from './type_object';
import * as number from './type_number';
import * as date from './type_date';
import * as array from './type_array';
import * as dom from './dom';
import * as browser from './browser';
declare const _default: {
    string: typeof string;
    regexp: typeof regexp;
    object: typeof object;
    number: typeof number;
    date: typeof date;
    array: typeof array;
    dom: typeof dom;
    browser: typeof browser;
};
export default _default;
