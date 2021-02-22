/* tslint:disable */
/* eslint-disable */
/**
 * Gitea API.
 * This documentation describes the Gitea API.
 *
 * OpenAPI spec version: 1.14.0&#43;dev-693-g487f2ee41
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * EditIssueOption options for editing an issue
 * @export
 * @interface EditIssueOption
 */
export interface EditIssueOption {
    /**
     * deprecated
     * @type {string}
     * @memberof EditIssueOption
     */
    assignee?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof EditIssueOption
     */
    assignees?: any;
    /**
     * 
     * @type {string}
     * @memberof EditIssueOption
     */
    body?: any;
    /**
     * 
     * @type {Date}
     * @memberof EditIssueOption
     */
    dueDate?: any;
    /**
     * 
     * @type {number}
     * @memberof EditIssueOption
     */
    milestone?: any;
    /**
     * 
     * @type {string}
     * @memberof EditIssueOption
     */
    ref?: any;
    /**
     * 
     * @type {string}
     * @memberof EditIssueOption
     */
    state?: any;
    /**
     * 
     * @type {string}
     * @memberof EditIssueOption
     */
    title?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EditIssueOption
     */
    unsetDueDate?: any;
}
