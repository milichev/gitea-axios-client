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
 * CreateBranchProtectionOption options for creating a branch protection
 * @export
 * @interface CreateBranchProtectionOption
 */
export interface CreateBranchProtectionOption {
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    approvals_whitelist_teams?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    approvals_whitelist_username?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    block_on_official_review_requests?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    block_on_outdated_branch?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    block_on_rejected_reviews?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    branch_name?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    dismiss_stale_approvals?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enable_approvals_whitelist?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enable_merge_whitelist?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enable_push?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enable_push_whitelist?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enable_status_check?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    merge_whitelist_teams?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    merge_whitelist_usernames?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    protected_file_patterns?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    push_whitelist_deploy_keys?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    push_whitelist_teams?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    push_whitelist_usernames?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    require_signed_commits?: any;
    /**
     * 
     * @type {number}
     * @memberof CreateBranchProtectionOption
     */
    required_approvals?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    status_check_contexts?: any;
}
