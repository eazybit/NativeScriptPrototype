#disables ATS in debug builds.
INFOPLIST="${TARGET_BUILD_DIR}"/"${INFOPLIST_PATH}"
echo $INFOPLIST
case "${CONFIGURATION}" in
"Release"|"Adhoc")
/usr/libexec/PlistBuddy -c "Set :NSAppTransportSecurity:NSAllowsArbitraryLoads NO" "${INFOPLIST}"
;;
"Debug")
/usr/libexec/PlistBuddy -c "Set :NSAppTransportSecurity:NSAllowsArbitraryLoads YES" "${INFOPLIST}"
;; 
esac
