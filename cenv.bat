@rem wsgiref - python2.7
@rem conda install -c phumke gunicorn=19.3.0
conda create --name angtest python=2.7 Flask Flask-Restless Flask-SQLAlchemy python-dateutil requests python-mimeparse wsgiref

