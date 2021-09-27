import sleet from "assets/icons/sleet.svg";
import clear from "assets/icons/clear.svg";
import cloud_cover from "assets/icons/cloud_cover.svg";
import heavy_rain from "assets/icons/heavy_rain.svg";
import isolated_clouds from "assets/icons/isolated_clouds.svg";
import light_rain from "assets/icons/light_rain.svg";
import moderate_rain from "assets/icons/moderate_rain.svg";
import moderate_snow from "assets/icons/moderate_snow.svg";
import overcast from "assets/icons/overcast.svg";
import scattered_clouds from "assets/icons/scattered_clouds.svg";
import sea_level_pressure from "assets/icons/sea_level_pressure.svg";
import total_precitipation from "assets/icons/total_precitipation.svg";
import wind_direction from "assets/icons/wind_direction.svg";
import wind_gust from "assets/icons/wind_gust.svg";
import wind_speed from "assets/icons/wind_speed.svg";

export const icons: Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  sleet,
  clear,
  cloud_cover,
  heavy_rain,
  isolated_clouds,
  light_rain,
  moderate_rain,
  moderate_snow,
  overcast,
  scattered_clouds,
  sea_level_pressure,
  total_precitipation,
  wind_direction,
  wind_gust,
  wind_speed,
};
