MAIN_BRANCH   = main
DEPLOY_BRANCH = gh-pages
BUILD_DIR     = dist

.PHONY: deploy
deploy:
	# 1. Сборка на main
	git checkout $(MAIN_BRANCH)
	npm run build

	# 2. Деплой на gh-pages
	git checkout $(DEPLOY_BRANCH)

	# удалить все отслеживаемые файлы, КРОМЕ CNAME
	git rm -r . ':!CNAME' || echo "Nothing to remove"

	# скопировать билд из dist (один клон репо)
	cp -r $(BUILD_DIR)/* .

	git add .
	git commit -m "Deploy" || echo "Nothing to commit"
	git push

	# 3. Вернуться на main
	git checkout $(MAIN_BRANCH)
