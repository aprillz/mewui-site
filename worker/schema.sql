-- One row per page per day. Nothing identifies a visitor.
CREATE TABLE IF NOT EXISTS visits (
  day   TEXT    NOT NULL,
  path  TEXT    NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, path)
);
