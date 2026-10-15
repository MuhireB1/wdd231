const samplePosts = [
    {
        title: "Small acts of support make a lasting difference",
        text: "When neighbors share time, skills, and resources, everyone has more room to thrive.",
        author: "Mutualité community",
        source: "Sample community reflection"
    },
    {
        title: "Giving can mean more than money",
        text: "A few hours of mentoring or a shared tool can help someone take their next step.",
        author: "Mutualité community",
        source: "Sample community reflection"
    },
    {
        title: "Strong communities grow together",
        text: "The best support is built on listening, trust, and people showing up for one another.",
        author: "Mutualité community",
        source: "Sample community reflection"
    }
];

export async function fetchRedditPosts() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
        const response = await fetch(
            "https://www.reddit.com/search.json?q=charity%20donation%20community%20support&sort=top&t=year&limit=6",
            {
                headers: { Accept: "application/json" },
                signal: controller.signal
            }
        );

        if (!response.ok) {
            throw new Error(`Reddit returned HTTP ${response.status}`);
        }

        const data = await response.json();
        const posts = data?.data?.children
            ?.map(({ data: post }) => ({
                title: post.title,
                text: post.selftext || "Open this community post to read the full story.",
                author: post.author,
                source: `r/${post.subreddit}`,
                url: `https://www.reddit.com${post.permalink}`
            }))
            .filter(post => post.title && post.author)
            .slice(0, 6);

        if (!posts?.length) {
            throw new Error("Reddit returned no matching community posts");
        }

        return { posts, isSample: false };
    } catch (error) {
        console.error("Unable to load public community posts:", error);
        return { posts: samplePosts, isSample: true };
    } finally {
        clearTimeout(timeoutId);
    }
}


// ---------- WEATHER API ----------

const currentWeatherURL =
    `https://api.openweathermap.org/data/2.5/weather?lat=-1.95&lon=30.10&units=imperial&appid=02f77436353831ce767f52406206d298`;

export async function fetchCurrentWeather() {
    try{
        const response = await fetch(currentWeatherURL);
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    } catch (error){
        console.log("Error fetching API", error);
        return null;
    }
}