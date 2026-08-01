#!/bin/bash
# Downloads all 190 Rounds Codex illustrations, named by the exam question they belong to.
# Double-click this file on a Mac. On Windows/Linux run:  bash download-rounds-codex-images.command
#
# No Higgsfield login is needed -- the image URLs are plain public CloudFront links.
# Files land in a folder called rounds-codex-images next to this script.

cd "$(dirname "$0")" || exit 1
mkdir -p rounds-codex-images && cd rounds-codex-images || exit 1
echo "Downloading 190 images into $(pwd)"
ok=0; fail=0; skip=0

if [ -s "s1-0006.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0006.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190645_758d7a38-1ff1-4977-969c-774d2b035726.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0006.png"; fi
fi
if [ -s "s1-0010.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0010.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190648_748334a1-4e45-442e-850e-fda7cf9fae57.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0010.png"; fi
fi
if [ -s "s1-0021.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0021.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190652_fee60f0d-23d8-4e40-bd64-8c0a8d38be0e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0021.png"; fi
fi
if [ -s "s1-0030.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0030.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_141417_697ea02a-9206-410f-b939-4cc6ffab8314.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0030.png"; fi
fi
if [ -s "s1-0031.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0031.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_141407_01a2738a-ba91-44a3-b955-1cb67f7d22ea.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0031.png"; fi
fi
if [ -s "s1-0034.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0034.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_141426_e9b1b267-2030-465e-9a6c-cf10492eed3d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0034.png"; fi
fi
if [ -s "s1-0036.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0036.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190656_46475b6b-42a8-48b1-8139-cc3cc04e78a2.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0036.png"; fi
fi
if [ -s "s1-0039.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0039.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190701_d6f17940-f1f9-46cb-8bd9-7e3f19cb41f2.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0039.png"; fi
fi
if [ -s "s1-0040.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0040.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_140232_194ea161-1a51-4275-8eed-6f9d25e4708d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0040.png"; fi
fi
if [ -s "s1-0045.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0045.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190705_66275028-563c-4dfe-9b91-e51af6c5461e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0045.png"; fi
fi
if [ -s "s1-0056.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0056.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190709_47c7af0c-2f62-41eb-8307-1b14aae8c005.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0056.png"; fi
fi
if [ -s "s1-0060.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0060.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072055_b5b6d40b-597b-4cef-aef6-cf00daf11857.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0060.png"; fi
fi
if [ -s "s1-0063.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0063.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190716_00d3ed5d-b608-43de-bd48-d54a19bfea9f.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0063.png"; fi
fi
if [ -s "s1-0064.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0064.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190719_4f9ab7a9-24ce-46b8-8b09-85ec958be949.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0064.png"; fi
fi
if [ -s "s1-0065.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0065.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_141429_7e376aa7-7d46-4960-975c-ed1ee2c52e6a.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0065.png"; fi
fi
if [ -s "s1-0070.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0070.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190722_4b08b754-389f-4463-8072-67030135b32b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0070.png"; fi
fi
if [ -s "s1-0071.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0071.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_190725_b6ae91bf-5e34-45d9-8bac-aedc907bd2b0.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0071.png"; fi
fi
if [ -s "s1-0085.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0085.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_140225_a59f7a2f-9f60-40c4-b274-0e7276ec5baf.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0085.png"; fi
fi
if [ -s "s1-0089.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0089.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_141359_e946060e-346b-473a-9b98-4a24babf6550.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0089.png"; fi
fi
if [ -s "s1-0095.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0095.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072142_a073ad46-80c5-4b9d-8a07-2d71e7559411.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0095.png"; fi
fi
if [ -s "s1-0101.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0101.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072145_ed1cc86d-c96c-4573-94f3-d88f097f37b7.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0101.png"; fi
fi
if [ -s "s1-0105.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0105.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072148_b3a2a9fd-fa1b-427e-995c-969b5d82975e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0105.png"; fi
fi
if [ -s "s1-0106.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0106.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072152_aa2c3192-d36e-413c-b387-a9d58dbab631.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0106.png"; fi
fi
if [ -s "s1-0109.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0109.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072155_daba7497-91a1-4fa1-9e59-af880b21c20d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0109.png"; fi
fi
if [ -s "s1-0113.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0113.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072158_46c3019b-1ba1-43c9-a50b-1244942d4519.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0113.png"; fi
fi
if [ -s "s1-0114.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0114.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072202_3e260eea-0eb7-44a3-9392-08d605593190.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0114.png"; fi
fi
if [ -s "s1-0115.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0115.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072204_4fa99257-f6ee-414f-ab0e-d1578d55965a.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0115.png"; fi
fi
if [ -s "s1-0118.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0118.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072208_75ce62e9-448d-4c62-bbc7-b400456bd6da.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0118.png"; fi
fi
if [ -s "s1-0119.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0119.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072211_ec7f0e27-b82a-4c15-a74b-728a21a009d8.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0119.png"; fi
fi
if [ -s "s1-0120.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0120.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072213_8e743c19-326d-4240-a35a-07875cd057bc.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0120.png"; fi
fi
if [ -s "s1-0121.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0121.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072215_81cc8a87-4524-432b-9ac6-743f75db50fe.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0121.png"; fi
fi
if [ -s "s1-0130.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0130.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072400_1016e218-6831-4c38-bbb6-c53853f9c4ba.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0130.png"; fi
fi
if [ -s "s1-0132.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0132.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072403_74d786a7-7c8f-4b8f-8d28-5acbac7c77cb.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0132.png"; fi
fi
if [ -s "s1-0135.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0135.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072406_966d72d0-a4dd-487b-95ca-d3e731e2c847.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0135.png"; fi
fi
if [ -s "s1-0137.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0137.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072409_7c0b148f-4790-4aee-a9be-d0753450611d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0137.png"; fi
fi
if [ -s "s1-0157.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0157.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072423_54e95c59-78e6-416f-81be-a65a04af259a.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0157.png"; fi
fi
if [ -s "s1-0159.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0159.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_141411_526235a2-38b1-49d0-85b8-81dd7d817b47.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0159.png"; fi
fi
if [ -s "s1-0160.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0160.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072426_c927548b-5b65-46f4-aed9-a7ba1113139a.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0160.png"; fi
fi
if [ -s "s1-0161.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0161.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072429_845a1fdd-d88c-4b4c-874c-6ea63262de9e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0161.png"; fi
fi
if [ -s "s1-0180.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0180.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072551_3143d5f0-97e7-49ca-9cc3-aa0684fa1ca2.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0180.png"; fi
fi
if [ -s "s1-0182.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0182.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072555_5197d524-17c3-4b25-9bd9-10b65d5baacf.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0182.png"; fi
fi
if [ -s "s1-0184.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0184.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072558_342fa6c0-2f2b-448a-944b-304f4d73d154.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0184.png"; fi
fi
if [ -s "s1-0185.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0185.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072601_869b4c8f-c415-4dc9-b73c-a6b859a1ea9e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0185.png"; fi
fi
if [ -s "s1-0186.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0186.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_141418_1b39e379-5274-43c0-b2a1-c6566b134b97.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0186.png"; fi
fi
if [ -s "s1-0188.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0188.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072604_72f009cd-0730-46cf-93d1-639326f9292e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0188.png"; fi
fi
if [ -s "s1-0195.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0195.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072607_e16d6b45-d9f7-45cf-915f-c9dee7ec274b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0195.png"; fi
fi
if [ -s "s1-0206.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0206.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072810_ff9a4268-e64c-41f7-b49e-187cfddd91f6.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0206.png"; fi
fi
if [ -s "s1-0210.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0210.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072814_4045a425-156c-4d40-b7cf-2ab62d4b571c.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0210.png"; fi
fi
if [ -s "s1-0213.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0213.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072817_3133de78-d6d8-47fe-9508-68aefdd1b4d7.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0213.png"; fi
fi
if [ -s "s1-0216.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0216.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_141422_93945578-0afe-4c7c-a3db-829f8de57ad7.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0216.png"; fi
fi
if [ -s "s1-0226.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0226.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073159_efa0cae6-08e1-455b-a202-2a417aec8a37.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0226.png"; fi
fi
if [ -s "s1-0230.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0230.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073202_c8312c23-ce40-43db-addf-b50df433411d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0230.png"; fi
fi
if [ -s "s1-0231.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0231.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073206_e62bd31e-744b-4ed6-9716-5afc2ddecdad.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0231.png"; fi
fi
if [ -s "s1-0236.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0236.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073210_db877746-0c98-40f8-94f0-c45e9a4ab46f.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0236.png"; fi
fi
if [ -s "s1-0239.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0239.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073214_0bef9f41-f6ce-49f6-926d-e3657691d3a6.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0239.png"; fi
fi
if [ -s "s1-0240.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0240.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073217_b42170c3-132b-490a-a83a-b5ea6dd3ca76.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0240.png"; fi
fi
if [ -s "s1-0242.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0242.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073221_5c94cac1-ff6e-42f4-9c7b-1d4bdb7f656b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0242.png"; fi
fi
if [ -s "s1-0244.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0244.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073225_41914224-70ba-4ca4-a041-227cfc3e440f.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0244.png"; fi
fi
if [ -s "s1-0247.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0247.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073228_f53d8c1b-c2db-4b35-8c8b-5664435473e5.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0247.png"; fi
fi
if [ -s "s1-0252.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0252.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073231_a57d7c50-f4d4-49bd-b9b2-ea0e9b1e317c.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0252.png"; fi
fi
if [ -s "s1-0253.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0253.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073234_39178cfb-fd5c-40d5-ab3e-efae94f73bae.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0253.png"; fi
fi
if [ -s "s1-0260.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0260.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073237_c67c7af4-f99e-467c-81d6-0eb7ec601572.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0260.png"; fi
fi
if [ -s "s1-0262.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0262.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073324_24bbaf84-53f7-494f-b9aa-5b9fa071fa7e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0262.png"; fi
fi
if [ -s "s1-0264.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0264.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073327_3cb41df4-7bc6-4012-81e3-9b04e0f0c591.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0264.png"; fi
fi
if [ -s "s1-0280.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s1-0280.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073330_cea8db52-071e-456a-b162-6d21084ee234.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s1-0280.png"; fi
fi
if [ -s "s2ck-0010.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0010.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072412_686b0313-88b3-47ee-9719-2ce1031665cb.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0010.png"; fi
fi
if [ -s "s2ck-0013.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0013.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072415_ee63e07b-d8b5-4ee8-a0ae-c793ef6dd201.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0013.png"; fi
fi
if [ -s "s2ck-0017.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0017.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072418_907da106-6be6-45d1-bab7-3e4c7b513b62.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0017.png"; fi
fi
if [ -s "s2ck-0035.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0035.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072435_cbe3ffb6-ea4e-4f16-80e4-3f612a96bf1f.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0035.png"; fi
fi
if [ -s "s2ck-0038.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0038.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_141403_0d54850b-8fdf-41a4-947f-932295eb20b1.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0038.png"; fi
fi
if [ -s "s2ck-0039.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0039.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072534_3405d573-c4c8-4a75-9c8f-a87175397330.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0039.png"; fi
fi
if [ -s "s2ck-0040.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0040.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072536_13de55bf-9d51-4596-87fa-51b9395c8037.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0040.png"; fi
fi
if [ -s "s2ck-0042.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0042.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072539_68acb98d-612f-41d5-9649-5d86018fdbe6.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0042.png"; fi
fi
if [ -s "s2ck-0051.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0051.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072610_3d7af9ea-7018-4580-9b71-18fecf48dbd2.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0051.png"; fi
fi
if [ -s "s2ck-0053.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0053.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072744_94227522-39ef-48c6-acab-69aa4d268399.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0053.png"; fi
fi
if [ -s "s2ck-0060.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0060.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_140228_be8f5e51-259e-4c22-8acc-12b5afab9341.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0060.png"; fi
fi
if [ -s "s2ck-0064.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0064.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072748_5b5005ea-6a1b-4f42-8f0c-cdadb06a1ffa.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0064.png"; fi
fi
if [ -s "s2ck-0067.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0067.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072752_1de4751c-39bc-4205-bcfb-7ce75ab0967f.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0067.png"; fi
fi
if [ -s "s2ck-0070.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0070.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072756_0db79bbf-a055-48b8-98ce-cda7f32b2db7.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0070.png"; fi
fi
if [ -s "s2ck-0071.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0071.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072759_dfc11f66-e6ad-404a-9bcf-6e1b4c4bb089.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0071.png"; fi
fi
if [ -s "s2ck-0081.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0081.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072824_a43424c4-919d-4f2d-88ca-76585283ca72.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0081.png"; fi
fi
if [ -s "s2ck-0086.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0086.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072908_c2d495bd-e208-41e7-8821-7de5e9d81f5b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0086.png"; fi
fi
if [ -s "s2ck-0095.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0095.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072919_5136e798-14c7-413f-b4ad-fc42a45edf8d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0095.png"; fi
fi
if [ -s "s2ck-0101.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0101.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072946_0ae28c3e-ac43-418f-8bce-ca3fb46ac4ae.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0101.png"; fi
fi
if [ -s "s2ck-0105.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0105.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073033_fef5d5ad-509d-4a95-9e4a-7b91defb752c.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0105.png"; fi
fi
if [ -s "s2ck-0111.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0111.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073037_530e1458-4d04-4f89-9530-eab0021b05fc.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0111.png"; fi
fi
if [ -s "s2ck-0112.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0112.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073040_f74ec305-f561-47da-b92a-944357482a36.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0112.png"; fi
fi
if [ -s "s2ck-0114.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0114.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073044_c7c25afe-2800-412b-ab30-47dfa2bfef3d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0114.png"; fi
fi
if [ -s "s2ck-0120.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0120.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073048_db7f2676-93df-42b0-8d67-aab4158d54ca.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0120.png"; fi
fi
if [ -s "s2ck-0127.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0127.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073334_993a0700-a345-4fd0-8be0-bb8a3436fcba.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0127.png"; fi
fi
if [ -s "s2ck-0128.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0128.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073338_777a4431-7fa6-4f58-bf48-8e5d19e0ebd6.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0128.png"; fi
fi
if [ -s "s2ck-0129.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0129.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073341_af51e718-1590-4d0d-8436-a8ddab388c8b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0129.png"; fi
fi
if [ -s "s2ck-0136.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0136.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073348_a2cb492a-43d9-4a2b-98f6-1b293fc874e3.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0136.png"; fi
fi
if [ -s "s2ck-0137.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0137.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073352_060dc8d2-6ff3-430b-98fb-bfab69bd7aae.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0137.png"; fi
fi
if [ -s "s2ck-0140.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0140.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073355_0b4f5351-9d7e-4ddb-b2c9-95e3abc925dd.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0140.png"; fi
fi
if [ -s "s2ck-0144.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0144.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073358_9172a790-dc63-414c-867a-1cadb97be77c.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0144.png"; fi
fi
if [ -s "s2ck-0153.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0153.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073508_c22cbb3e-28d2-4e36-97a5-7dfdf7f10971.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0153.png"; fi
fi
if [ -s "s2ck-0160.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0160.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073511_4236046e-9f81-429d-9c91-0eef44713d6b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0160.png"; fi
fi
if [ -s "s2ck-0161.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0161.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073515_01a162ec-d41e-4697-92e9-250c942c8e90.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0161.png"; fi
fi
if [ -s "s2ck-0162.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0162.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073518_df8a49a5-b27b-4c44-822b-b1e5189f450b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0162.png"; fi
fi
if [ -s "s2ck-0166.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0166.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073522_de854826-6ecf-480f-bee6-e0eccdc62831.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0166.png"; fi
fi
if [ -s "s2ck-0171.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0171.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073525_02a7323f-f231-4563-990f-09d05a017cff.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0171.png"; fi
fi
if [ -s "s2ck-0178.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0178.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073913_09f860be-a8c2-4608-b00e-25cd3407194d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0178.png"; fi
fi
if [ -s "s2ck-0185.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0185.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073921_c49241e5-aaf8-49a3-ac19-ad37e570ea6b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0185.png"; fi
fi
if [ -s "s2ck-0188.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0188.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073928_1fa351cb-72f0-4d68-b914-96ab3a622222.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0188.png"; fi
fi
if [ -s "s2ck-0191.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0191.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073939_d1d949c7-2993-45b7-a7d0-e038ab3244b6.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0191.png"; fi
fi
if [ -s "s2ck-0201.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0201.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073945_97a33a73-1c38-4e9e-bd8a-82945873cdd3.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0201.png"; fi
fi
if [ -s "s2ck-0211.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0211.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073952_790af610-3a3d-4a73-bf2c-0f00cdf426d9.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0211.png"; fi
fi
if [ -s "s2ck-0214.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0214.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073958_41786586-4d63-4aec-b9d0-fe56557635ec.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0214.png"; fi
fi
if [ -s "s2ck-0217.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0217.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260729_140235_1aa0f117-52e5-4779-af84-50755fcf2bc1.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0217.png"; fi
fi
if [ -s "s2ck-0219.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0219.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074008_52b2c780-8eb6-4292-826b-288074554cd6.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0219.png"; fi
fi
if [ -s "s2ck-0230.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0230.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074044_9b9878c0-0eb6-47a7-8c84-6cb13d28308b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0230.png"; fi
fi
if [ -s "s2ck-0231.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0231.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074050_3efb99bc-757f-4133-8792-d63d1bec60a7.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0231.png"; fi
fi
if [ -s "s2ck-0232.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0232.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074104_4b7c7443-260f-477c-804e-9f08d887db9e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0232.png"; fi
fi
if [ -s "s2ck-0233.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0233.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074112_ac49e093-5060-4dc4-b89e-11beea302a22.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0233.png"; fi
fi
if [ -s "s2ck-0236.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0236.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074121_b9173c86-eb4e-4e61-ac89-dca01deb932d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0236.png"; fi
fi
if [ -s "s2ck-0238.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0238.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074128_07fcfa53-0d8d-4104-9ecd-4db28537ba95.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0238.png"; fi
fi
if [ -s "s2ck-0241.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0241.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074135_084c31ea-9c55-4f86-9ea0-f41bbcace59b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0241.png"; fi
fi
if [ -s "s2ck-0242.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0242.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074142_ed947471-e4e5-4fc3-96ab-19eed5e39b2e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0242.png"; fi
fi
if [ -s "s2ck-0252.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0252.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074207_fe563b63-fe00-4439-a4a8-f10159deb2fd.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0252.png"; fi
fi
if [ -s "s2ck-0253.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0253.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074215_4dbc8c90-d8cc-4feb-9a8f-8b109c69efff.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0253.png"; fi
fi
if [ -s "s2ck-0257.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0257.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074222_21ccd38f-2043-4f0f-9e27-6156780eb430.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0257.png"; fi
fi
if [ -s "s2ck-0258.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0258.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074302_0aaad7a1-fea5-4d00-8d49-3f2a0c22a5eb.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0258.png"; fi
fi
if [ -s "s2ck-0259.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0259.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074311_bb94db1a-d446-4979-9c1d-4c9a334e2130.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0259.png"; fi
fi
if [ -s "s2ck-0260.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0260.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074318_f9c3dba9-1897-44ba-8ec6-436c90dd8d36.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0260.png"; fi
fi
if [ -s "s2ck-0261.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0261.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074327_5bf3490b-d21f-4c40-b847-f66a23a886f2.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0261.png"; fi
fi
if [ -s "s2ck-0263.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0263.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074337_6f181e9c-7a34-4d15-b866-d2a07f8a1cf9.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0263.png"; fi
fi
if [ -s "s2ck-0264.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0264.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074352_c81ef248-4c05-45f3-89d9-73e95f1fe68f.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0264.png"; fi
fi
if [ -s "s2ck-0265.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0265.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074357_27919808-a60a-4dcd-9a7a-ac02efdec852.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0265.png"; fi
fi
if [ -s "s2ck-0276.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0276.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074406_f412ae03-de88-4eb1-a73f-4182d8b229a9.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0276.png"; fi
fi
if [ -s "s2ck-0277.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0277.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074415_0e3f2287-08b9-4e89-a236-5d9713791c9f.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0277.png"; fi
fi
if [ -s "s2ck-0282.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0282.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074422_82472e0c-4350-49bc-8533-6654ab5747e0.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0282.png"; fi
fi
if [ -s "s2ck-0285.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0285.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074429_00de94ba-a86e-40d6-8b29-563d72e6aa8b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0285.png"; fi
fi
if [ -s "s2ck-0286.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0286.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074435_ef472361-bbc8-46dd-90aa-841512eea3a7.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0286.png"; fi
fi
if [ -s "s2ck-0287.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0287.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074506_0417669f-6ab5-4f04-bb76-51ac49ca6c6d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0287.png"; fi
fi
if [ -s "s2ck-0288.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0288.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074514_2905a405-4314-48da-8411-8d54e3eeddb8.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0288.png"; fi
fi
if [ -s "s2ck-0302.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0302.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074527_25a185db-3b33-4f33-8d7b-4a0da5347060.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0302.png"; fi
fi
if [ -s "s2ck-0307.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0307.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074533_24612017-f2c4-44a3-9aba-c48308195d07.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0307.png"; fi
fi
if [ -s "s2ck-0308.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0308.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074542_8839651c-23a1-4990-8c53-7fc84e1b6861.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0308.png"; fi
fi
if [ -s "s2ck-0310.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0310.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074547_5069192f-98f3-4896-86b9-8e852ac69725.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0310.png"; fi
fi
if [ -s "s2ck-0314.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s2ck-0314.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074554_3cd83ece-9d63-492a-8914-74ba9333095f.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s2ck-0314.png"; fi
fi
if [ -s "s3-0013.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0013.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072543_5643f639-6b0f-4127-a756-8dba7ae4033b.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0013.png"; fi
fi
if [ -s "s3-0025.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0025.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072547_9b896835-8285-4a39-8f23-65b07b6d3b44.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0025.png"; fi
fi
if [ -s "s3-0048.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0048.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072803_8bbc0b46-302a-44b3-a922-b2871f724075.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0048.png"; fi
fi
if [ -s "s3-0050.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0050.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072807_6c2ac936-59f7-4c3d-8765-28606cc3fea3.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0050.png"; fi
fi
if [ -s "s3-0053.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0053.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072923_2f3aa7a4-42ed-406c-80af-3088e93d0fc3.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0053.png"; fi
fi
if [ -s "s3-0064.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0064.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072927_17638bcc-e81b-4022-95bc-04e450329d67.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0064.png"; fi
fi
if [ -s "s3-0067.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0067.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072930_cea9f0a3-8bdd-425d-a8b5-ebaeddefcd74.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0067.png"; fi
fi
if [ -s "s3-0068.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0068.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072933_69cb0ded-63cc-4506-8f10-23cb7f57b2f6.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0068.png"; fi
fi
if [ -s "s3-0087.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0087.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072937_5b253fa1-fd19-4c38-af7d-d16daa801a5c.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0087.png"; fi
fi
if [ -s "s3-0089.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0089.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072941_cc348246-12cc-49e5-8a7f-35c21478a587.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0089.png"; fi
fi
if [ -s "s3-0090.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0090.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_072943_d307bacd-62fd-4731-9231-da6ac5e85505.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0090.png"; fi
fi
if [ -s "s3-0101.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0101.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073052_08c6c5cc-746c-4f15-9433-1ddf0deac75e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0101.png"; fi
fi
if [ -s "s3-0102.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0102.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073055_d6b2cec7-0119-4885-9c99-22c09cf8c306.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0102.png"; fi
fi
if [ -s "s3-0125.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0125.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073103_a125432a-f901-4c24-a811-02313f770d9f.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0125.png"; fi
fi
if [ -s "s3-0137.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0137.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073106_661e65c3-ad27-4243-92b7-6499c239ce47.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0137.png"; fi
fi
if [ -s "s3-0138.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0138.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073109_1921c55f-fe1b-4eaf-802c-477ab18855b4.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0138.png"; fi
fi
if [ -s "s3-0141.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0141.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073112_ad133f22-31cd-4db6-9183-821799d6ac68.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0141.png"; fi
fi
if [ -s "s3-0151.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0151.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073402_4b8d5715-b4d3-476f-b59f-c4656fb353a4.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0151.png"; fi
fi
if [ -s "s3-0174.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0174.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073450_48dcb5eb-28a6-43fa-9580-7c718db628a1.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0174.png"; fi
fi
if [ -s "s3-0185.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0185.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073454_4616b016-a9a7-41f0-b2ce-1d96937ef9c1.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0185.png"; fi
fi
if [ -s "s3-0187.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0187.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073458_5cc21146-684a-4030-b35e-864c52248db2.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0187.png"; fi
fi
if [ -s "s3-0189.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0189.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073502_2ea298a3-9677-4166-aec3-15f314ef1c4e.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0189.png"; fi
fi
if [ -s "s3-0190.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0190.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073505_e3a3a9c1-5a3b-4cfa-96a7-2db51b7f81ed.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0190.png"; fi
fi
if [ -s "s3-0214.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0214.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073528_abff641e-611b-484e-8b1b-0f652c253160.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0214.png"; fi
fi
if [ -s "s3-0218.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0218.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073834_f7d49d2f-2235-4904-9c79-893df25fafc8.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0218.png"; fi
fi
if [ -s "s3-0219.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0219.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073843_16022fcd-6c00-4d45-ad7d-fa6370be8c5d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0219.png"; fi
fi
if [ -s "s3-0234.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0234.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073852_3c007981-36fe-49a5-b87d-5c4c5b675ad4.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0234.png"; fi
fi
if [ -s "s3-0238.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0238.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_073906_8f22aaad-fc90-4354-b240-158619dad097.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0238.png"; fi
fi
if [ -s "s3-0266.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0266.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074602_796d51c1-81e9-4023-867b-8f57d6af8e14.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0266.png"; fi
fi
if [ -s "s3-0273.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0273.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074612_cb4b6b49-db69-4f21-a881-4c75321edaf4.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0273.png"; fi
fi
if [ -s "s3-0275.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0275.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074623_d1faab75-5a49-445c-840c-30353d6d0686.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0275.png"; fi
fi
if [ -s "s3-0276.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0276.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074817_53b67d22-16a8-49b2-8627-f26aad798893.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0276.png"; fi
fi
if [ -s "s3-0282.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0282.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074840_5f0b5957-417f-4464-b727-3c6a72e1968f.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0282.png"; fi
fi
if [ -s "s3-0314.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0314.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074629_6686d1f7-9a04-4ecb-9363-d27477640b7d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0314.png"; fi
fi
if [ -s "s3-0315.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0315.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074635_3b0e700e-e757-423e-b9a4-561c92112543.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0315.png"; fi
fi
if [ -s "s3-0324.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0324.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074704_dd91475b-b85e-419c-a7eb-a719055da8ac.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0324.png"; fi
fi
if [ -s "s3-0332.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0332.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074847_9a14521a-6eca-4872-92d9-ff52007c50a3.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0332.png"; fi
fi
if [ -s "s3-0333.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0333.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074853_b6005d6f-b024-4a7b-b107-ffe2bda08c43.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0333.png"; fi
fi
if [ -s "s3-0361.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0361.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074715_f2526ff3-5974-4829-8125-cae3b4922aca.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0361.png"; fi
fi
if [ -s "s3-0365.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0365.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074723_b51c0391-a12f-4ba7-a351-49caa170170c.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0365.png"; fi
fi
if [ -s "s3-0373.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0373.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074730_969e2b2e-8761-49ed-ad59-d1c86aadf527.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0373.png"; fi
fi
if [ -s "s3-0375.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0375.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074741_8aabc699-52f9-4748-beff-4b8b956ff800.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0375.png"; fi
fi
if [ -s "s3-0381.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0381.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074859_a7dd7dc4-3b87-4181-a8bf-481780f8c7cb.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0381.png"; fi
fi
if [ -s "s3-0389.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0389.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074907_6cfa34e8-7b68-4be0-89bf-c53582c48444.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0389.png"; fi
fi
if [ -s "s3-0394.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0394.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074917_cc891ada-4731-42fe-aa3c-646f3f2f723a.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0394.png"; fi
fi
if [ -s "s3-0404.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0404.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074747_71d7189f-e308-40c7-abb6-9b3295fdce84.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0404.png"; fi
fi
if [ -s "s3-0405.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0405.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074753_2f1a886d-e7a6-4d9f-bc0a-cc42f2001fa8.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0405.png"; fi
fi
if [ -s "s3-0406.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0406.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074802_94c8427d-0a52-4df5-9d3a-20d66d32fad3.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0406.png"; fi
fi
if [ -s "s3-0410.png" ]; then skip=$((skip+1)); else
  if curl -fsS --retry 3 --retry-delay 2 -o "s3-0410.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_20260731_074923_e5fea75c-1ef5-433f-aac1-a3c2eb1ac89d.png"; then ok=$((ok+1)); printf "."; else fail=$((fail+1)); printf "X"; rm -f "s3-0410.png"; fi
fi

echo ""
echo "downloaded $ok, already had $skip, failed $fail"
echo "Folder: $(pwd)"
if [ "$fail" -gt 0 ]; then echo "Re-run this script to retry the failures - it skips what it already has."; fi
echo ""; echo "Press return to close."; read _
