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
 * PullReviewComment represents a comment on a pull request review
 * @export
 * @interface PullReviewComment
 */
export interface PullReviewComment {
    /**
     * 
     * @type {string}
     * @memberof PullReviewComment
     */
    body?: any;
    /**
     * 
     * @type {string}
     * @memberof PullReviewComment
     */
    commit_id?: any;
    /**
     * 
     * @type {Date}
     * @memberof PullReviewComment
     */
    created_at?: any;
    /**
     * 
     * @type {string}
     * @memberof PullReviewComment
     */
    diff_hunk?: any;
    /**
     * 
     * @type {string}
     * @memberof PullReviewComment
     */
    html_url?: any;
    /**
     * 
     * @type {number}
     * @memberof PullReviewComment
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof PullReviewComment
     */
    original_commit_id?: any;
    /**
     * 
     * @type {number}
     * @memberof PullReviewComment
     */
    original_position?: any;
    /**
     * 
     * @type {string}
     * @memberof PullReviewComment
     */
    path?: any;
    /**
     * 
     * @type {number}
     * @memberof PullReviewComment
     */
    position?: any;
    /**
     * 
     * @type {number}
     * @memberof PullReviewComment
     */
    pull_request_review_id?: any;
    /**
     * 
     * @type {string}
     * @memberof PullReviewComment
     */
    pull_request_url?: any;
    /**
     * 
     * @type {User}
     * @memberof PullReviewComment
     */
    resolver?: any;
    /**
     * 
     * @type {Date}
     * @memberof PullReviewComment
     */
    updated_at?: any;
    /**
     * 
     * @type {User}
     * @memberof PullReviewComment
     */
    user?: any;
}
