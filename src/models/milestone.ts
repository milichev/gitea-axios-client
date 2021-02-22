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
 * Milestone milestone is a collection of issues on one repository
 * @export
 * @interface Milestone
 */
export interface Milestone {
    /**
     * 
     * @type {Date}
     * @memberof Milestone
     */
    closedAt?: any;
    /**
     * 
     * @type {number}
     * @memberof Milestone
     */
    closedIssues?: any;
    /**
     * 
     * @type {Date}
     * @memberof Milestone
     */
    createdAt?: any;
    /**
     * 
     * @type {string}
     * @memberof Milestone
     */
    description?: any;
    /**
     * 
     * @type {Date}
     * @memberof Milestone
     */
    dueOn?: any;
    /**
     * 
     * @type {number}
     * @memberof Milestone
     */
    id?: any;
    /**
     * 
     * @type {number}
     * @memberof Milestone
     */
    openIssues?: any;
    /**
     * 
     * @type {StateType}
     * @memberof Milestone
     */
    state?: any;
    /**
     * 
     * @type {string}
     * @memberof Milestone
     */
    title?: any;
    /**
     * 
     * @type {Date}
     * @memberof Milestone
     */
    updatedAt?: any;
}