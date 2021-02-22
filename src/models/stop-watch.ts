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
 * StopWatch represent a running stopwatch
 * @export
 * @interface StopWatch
 */
export interface StopWatch {
    /**
     * 
     * @type {Date}
     * @memberof StopWatch
     */
    created?: any;
    /**
     * 
     * @type {string}
     * @memberof StopWatch
     */
    duration?: any;
    /**
     * 
     * @type {number}
     * @memberof StopWatch
     */
    issueIndex?: any;
    /**
     * 
     * @type {string}
     * @memberof StopWatch
     */
    issueTitle?: any;
    /**
     * 
     * @type {string}
     * @memberof StopWatch
     */
    repoName?: any;
    /**
     * 
     * @type {string}
     * @memberof StopWatch
     */
    repoOwnerName?: any;
    /**
     * 
     * @type {number}
     * @memberof StopWatch
     */
    seconds?: any;
}
