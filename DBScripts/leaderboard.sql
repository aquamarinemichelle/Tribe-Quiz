-- Scores table
CREATE TABLE scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  culture TEXT NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;

-- Anyone logged in can read all scores (for global leaderboard)
CREATE POLICY "Anyone can view scores"
  ON scores FOR SELECT
  USING (auth.role() = 'authenticated');

-- Users can only insert their own scores
CREATE POLICY "Users can insert own scores"
  ON scores FOR INSERT
  WITH CHECK (auth.uid() = user_id);