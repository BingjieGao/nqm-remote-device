#/bin/shell


uci set wireless.@wifi-iface[-1].ssid=NQMINDS1
uci set wireless.@wifi-iface[-1].key=12345
uci commit wireless
wifi
exit 0
