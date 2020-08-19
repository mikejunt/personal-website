This is a personal website I created for myself.  It is an Angular single-page application utilizing a noSQL
MongoDB Database in the MEAN stack.  The application functions much like a blog, saving information about
my personal projects as database entries and retrieving and rendering them for the user.   The application
also features an admin area where I can create or modify project entries and choose which projects are
featured on the front page with simple toggles.   In order to showcase this interface, it is setup
with a tour mode.   The application links to the admin area, which allows unauthorized users to view and
manipulate the interface, but actual saving of changes to the database is disabled unless the application
is entered via a private portal w/ a password.   This sets a @ngrx/store state to know that I am authenticated,
and enables the saving of changes.

This is a fairly simple application overall but it is in practice a blog written from scratch.  Since the project
entries are saved in a MongoDB database, it would be easy to add comment threading in sub-documents or otherwise
adapt this into a more conventional blog or other article delivery application.
