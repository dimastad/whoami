MAIN_BRANCH   = main
DEPLOY_BRANCH = gh-pages
BUILD_DIR     = dist
TMP_BUILD     = /tmp/whoami-build

.PHONY: deploy
deploy:
	# собрать на main
	@git checkout $(MAIN_BRANCH)
	@npm run build

	# скопировать билд во временную папку
	@rm -rf $(TMP_BUILD)
	@mkdir -p $(TMP_BUILD)
	@cp -r $(BUILD_DIR)/* $(TMP_BUILD)

	# перейти на gh-pages и залить билд
	@git checkout $(DEPLOY_BRANCH)
	@git rm -r . || echo "Nothing to remove"
	@cp -r $(TMP_BUILD)/* .
	@git add .
	@git commit -m "Deploy" || echo "Nothing to commit"
	@git push

	# вернуться на main
	@git checkout $(MAIN_BRANCH)
