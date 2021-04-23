# Rambox Dark Mode overlays

This project leverages the [Rambox](https://rambox.app) workspace browser [JS code injection feature](https://github.com/ramboxapp/community-edition/wiki/Inject-JavaScript-Code) to load custom style into services.

## Structure

Each supported service has its own folder where 
- `custom.js` is the JS code to inject
-  and `custom.css` is the CSS code fetched by said JS.

## How-to

### Step 1. Configure the service

Roll over the supported enabled service name in the right pane and click the cog

![image](https://user-images.githubusercontent.com/17506424/115804300-057e5080-a3e3-11eb-919b-d0e1b80bcf27.png)


### Step 2. Open Advanced menu

Click the **Advanced** accordion menu

![image](https://user-images.githubusercontent.com/17506424/115804451-4fffcd00-a3e3-11eb-81e6-003d63be615c.png)


### Step 3. Paste JS

Copy the lines from the desired service `custom.js` file and paste them into the **Custom Code** text box, and click **Edit service**

![image](https://user-images.githubusercontent.com/17506424/115804591-96edc280-a3e3-11eb-955f-0acf6c3ce9c6.png)


### Step 4. Reload service

Click **Yes** and enjoy dark mode!

![image](https://user-images.githubusercontent.com/17506424/115804624-a53bde80-a3e3-11eb-98a2-8fe4568f51c9.png)
