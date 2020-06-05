import java.util.HashMap;
import java.util.Set;
public class Hashmatique{
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("track a", "lyrics a");
        trackList.put("track b", "lyrics b");
        trackList.put("track c", "lyrics c");
        trackList.put("track d", "lyrics d");

        String trackTitle = trackList.get("track a");
        System.out.println("The song lyrics are "+"'"+trackTitle+"'"+".");
    
        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println("Track :"+key+", Lyrics: "+trackList.get(key));
        }
    }
}
