MAIN_BRANCH = main
DEPLOY_BRANCH = gh-pages
BUILD_DIR = dist

deploy:
	# перейти на main и собрать
	@git checkout $(MAIN_BRANCH)
	@npm run build

	# переключиться на gh-pages и залить билд
	@git checkout $(DEPLOY_BRANCH)
	@rm -rf ./*
	@cp -r ../$(BUILD_DIR)/* . || cp -r $(BUILD_DIR)/* .
	@git add .
	@git commit -m "Deploy" || echo "Nothing to commit"
	@git push

	# вернуться на main
	@git checkout $(MAIN_BRANCH)
