#!/bin/bash

# Define the target directory
TARGET_DIR="/usr/local/bin"

# Check if the script is being run with sudo/root privileges
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root or use sudo"
  exit 1
fi

# Copy the executable to the target directory
cp clutch $TARGET_DIR

# Make sure the file is executable
chmod +x $TARGET_DIR/clutch

echo "clutch command installed successfully to $TARGET_DIR"
