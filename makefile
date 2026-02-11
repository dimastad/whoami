MAIN_BRANCH   = main
DEPLOY_BRANCH = gh-pages
BUILD_DIR     = dist

.PHONY: deploy
deploy:
	# перейти на main и собрать
	@git checkout $(MAIN_BRANCH)
	@npm run build

	# переключиться на gh-pages и залить билд
	@git checkout $(DEPLOY_BRANCH)
	@git rm -r . || echo "Nothing to remove"
	@cp -r ../$(BUILD_DIR)/* . 2>/dev/null || cp -r $(BUILD_DIR)/* .
	@git add .
	@git commit -m "Deploy" || echo "Nothing to commit"
	@git push

	# вернуться на main
	@git checkout $(MAIN_BRANCH)
 