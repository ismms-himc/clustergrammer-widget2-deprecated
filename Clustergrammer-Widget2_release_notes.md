# Clustergrammer-Widget2 Release Notes
See https://github.com/jupyter-widgets/widget-ts-cookiecutter#releasing-your-initial-packages

# Publish the javascript package
$ npm publish


# Publish the the python package
Bundle the python package
python setup.py sdist bdist_wheel

$ twine upload --skip-existing dist/*

Publish the package to PyPI:
$ twine upload dist/*