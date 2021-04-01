/* tslint:disable */
/* eslint-disable */
/**
 * Gitea API.
 * This documentation describes the Gitea API.
 *
 * OpenAPI spec version: 1.15.0+dev-49-gaee5ef005
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * ExternalTracker represents settings for external tracker
 * @export
 * @interface ExternalTracker
 */
export interface ExternalTracker {
    /**
     * External Issue Tracker URL Format. Use the placeholders {user}, {repo} and {index} for the username, repository name and issue index.
     * @type {string}
     * @memberof ExternalTracker
     */
    external_tracker_format?: any;
    /**
     * External Issue Tracker Number Format, either `numeric` or `alphanumeric`
     * @type {string}
     * @memberof ExternalTracker
     */
    external_tracker_style?: any;
    /**
     * URL of external issue tracker.
     * @type {string}
     * @memberof ExternalTracker
     */
    external_tracker_url?: any;
}
