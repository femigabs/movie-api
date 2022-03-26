/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS user_movies (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL, 
    title VARCHAR NOT NULL,
    released DATE NOT NULL,
    genre VARCHAR NOT NULL,
    director VARCHAR NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW() 
);