CREATE TABLE IF NOT EXISTS levels (
  id SERIAL PRIMARY KEY,
  level_number INTEGER NOT NULL UNIQUE,
  title TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  description TEXT,
  points INTEGER DEFAULT 0
);
INSERT INTO levels (level_number, title, difficulty, description, points) VALUES
(1, 'Level 1', 'Easy', 'Introductory reverse puzzle', 100),
(2, 'Level 2', 'Moderate', 'More complex logic', 200),
(3, 'Level 3', 'Hard', 'Trickier patterns', 350),
(4, 'Level 4', 'Expert', 'Advanced challenges', 500),
(5, 'Level 5', 'Master', 'Final boss', 800)
ON CONFLICT (level_number) DO NOTHING;