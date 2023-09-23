## Djapy-based Todo using Svelte

[Djapy](https://github.com/Bishwas-py/djapy) is the Django extremist friend, that can be used to
develop rest api in a shot, with a very few lines of code,
extreme speed and control.

This is a simple Todo application, using Svelte as frontend
and Django's Djapy as [backend](https://github.com/Bishwas-py/djapy-todo).

### How to run

```bash
# Clone the repository
git clone git@github.com:Bishwas-py/djapy-todo-svelte.git   # frontend
git clone git@github.com:Bishwas-py/djapy-todo.git          # backend
```

```bash
# Install dependencies

# frontend
cd djapy-todo-svelte
npm install

# backend
cd djapy-todo
pip install -r requirements.txt

pip3 install git+https://github.com/Bishwas-py/djapy.git@main  # make sure to use the latest djapy for this project
```

Now, create an `.env` in the root of the frontend directory
and add the following:

```bash
# .env
SECRET_BASE_API=http://127.0.0.1:8000   # backend url
```

Now, run the application:
```bash
# Run the application

# frontend
npm run dev

# backend
python manage.py runserver
```

### Screenshots
![image](https://github.com/Bishwas-py/djapy-todo-svelte/assets/42182303/15df5feb-a2a2-4248-b707-8191654a0f4a)

[Check out video](https://i.imgur.com/sLaMQtJ.mp4)
