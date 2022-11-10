package org

import future.keywords
import data.circleci.config

policy_name["require_orbs"]

require_snyk_orb = config.require_orbs(["snyk/snyk"])

# UUID for project to apply rule to
target_project := "897b8b0e-12d1-48f8-9582-87a7fcb7f83e"

# this rule is enabled only if the body is evaluates to true
enable_rule["require_snyk_orb"] { data.meta.project_id == target_project }

hard_fail["require_snyk_orb"] {
	require_snyk_orb
}
