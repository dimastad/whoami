# имя ветки с исходниками и ветки для деплоя
MAIN_BRANCH = main
DEPLOY_BRANCH = gh-pages
BUILD_DIR = dist

deploy:
	@git checkout $(MAIN_BRANCH)
	@npm run build

	@git checkout $(DEPLOY_BRANCH)
	@rm -rf ./*
	@cp -r $(BUILD_DIR)/* .
	@git add .
	@git commit -m "Deploy" || echo "Nothing to commit"
	@git push

	@git checkout $(MAIN_BRANCH)
