import webdriver from selenium
import {Service as ChromeService} from selenium.webdriver.chrome.service
import By from selenium.webdriver.common.by
import WebDriverWait from selenium.webdriver.support.ui
import {expected_conditions as EC} from selenium.webdriver.support
export {getMon}

function getMon(mon) {
    var options = webdriver.ChromeOptions()

    options.add_experimental_option('excludeSwitches', ['enable-logging'])

    // Path to the ChromeDriver executable
    chromedriver_path = 'C:/Users/rsola/chromedriver-win64/chromedriver.exe'

    // Create a Service object
    chrome_service = ChromeService(executable_path=chromedriver_path)

    // Initialize the Chrome browser with the Service object
    driver = webdriver.Chrome(service=chrome_service, options=options)

    // Pokémon name and Smogon URL
    pokemon_name = mon
    smogon_url = 'https://www.smogon.com/dex/ss/pokemon/{pokemon_name.lower()}'

    // Open the Smogon page for the Pokémon
    driver.get(smogon_url)

    try {
        // Scroll down to make the "x" button visible
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

        // Try to find and click the "x" button if it's present
        try {
            close_button = driver.find_element(By.CSS_SELECTOR, '.avp-floating-close-button.avp-button.avp-fade-enter-done')
            close_button.click()
        }
        catch {
            pass
        }
        // Find the "Export" button and click it
        export_button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.ExportButton')))
        export_button.click()

        // Wait for the textarea to be located
        textarea_element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, 'textarea')))
        
        // Get the text content of the textarea
        textarea_text = textarea_element.get_attribute('value')
        
        // Print or process the textarea content
        return textarea_text + "\n\n"
    }
    catch {
        //try sv instead of ss
        smogon_url = 'https://www.smogon.com/dex/sv/pokemon/{pokemon_name.lower()}'

        // Open the Smogon page for the Pokémon
        driver.get(smogon_url)

        // Scroll down to make the "x" button visible
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

        // Try to find and click the "x" button if it's present
        try {
            close_button = driver.find_element(By.CSS_SELECTOR, '.avp-floating-close-button.avp-button.avp-fade-enter-done')
            close_button.click()
        }
        catch {
            pass
        }
        // Find the "Export" button and click it
        export_button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.ExportButton')))
        export_button.click()

        // Wait for the textarea to be located
        textarea_element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, 'textarea')))
        
        // Get the text content of the textarea
        textarea_text = textarea_element.get_attribute('value')
        
        // Print or process the textarea content
        return textarea_text + "\n\n"
    }
    // Close the browser
    driver.quit()

}
