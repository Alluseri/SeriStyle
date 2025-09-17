#!/bin/bash
7z a SeriStyle-1.14.1.xpi ./html ./icons ./scripts ./background.html ./bgworker.js ./dnr_rule_srtlu.json ./LICENSE ./manifest.firefox.json
7z rn ./SeriStyle-1.14.1.xpi manifest.firefox.json manifest.json