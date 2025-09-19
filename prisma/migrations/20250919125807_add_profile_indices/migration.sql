-- CreateIndex
CREATE INDEX "Profile_lat_lon_idx" ON "public"."Profile"("lat", "lon");

-- CreateIndex
CREATE INDEX "Profile_gender_idx" ON "public"."Profile"("gender");
