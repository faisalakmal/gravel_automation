run all tests
"npx wdio run wdio.conf.js"

run selected tests 
"npx wdio run wdio.conf.js --spec ./test/specs/{file_test_name}"

run exclude selected test
"npx wdio run wdio.conf.js --exclude ./test/specs/{file_test_name}"

generate reports
"allure generate --clean && allure open"