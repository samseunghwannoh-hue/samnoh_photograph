#!/bin/bash

cd "$(dirname "$0")"

output="file_list.csv"

echo '"file_path","file_name"' > "$output"

find . -type f ! -name "$(basename "$0")" ! -name "$output" | while IFS= read -r filepath; do
    filename="$(basename "$filepath")"

    escaped_path="${filepath//\"/\"\"}"
    escaped_name="${filename//\"/\"\"}"

    echo "\"$escaped_path\",\"$escaped_name\"" >> "$output"
done

echo "CSV exported to $output"
read -p "Press Enter to close..."
