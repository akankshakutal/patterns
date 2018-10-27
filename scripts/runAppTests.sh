#! /bin/bash 

./scripts/runTest.sh ./createRectangle.js ./app_test_data/inputFiles/allInputsForRectangle ./app_test_data/outputFiles/allOutputsForRectangle
./scripts/runTest.sh ./createTriangle.js ./app_test_data/inputFiles/allInputsForTriangle ./app_test_data/outputFiles/allOutputsForTriangle
./scripts/runTest.sh ./createDiamond.js ./app_test_data/inputFiles/allInputsForDiamond ./app_test_data/outputFiles/allOutputsForDiamond

