import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="data:image/png;base64,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"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>
            </div>  
        </div>
    )
}

const RestaurantCard = () => (
    <div className="res-card">
        <img className="res-logo" alt="res-logo-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAABUFBMVEX/////AAD/4AAAAAD/3gD6+vrKysr19fXRAADt7e3d3d3q6urj4+Py8vL/+vrY2NjQ0ND/7e3GAADjAABQUFD/9fX/++GkpKRHR0dcXFy4uLgtLS2xsbH/aWn/Ozv//vZzc3OGhoaUlJT/JCT/SUnbAAD/5Dr/+toYGBh7e3s6OjrBwcGcnJz/GBj/3d3/QkL+p6f/MDCHAAD+z8//8aH/7on/98ppaWn/9r/+v7//dnb/V1f/t7f+nJwcAAA2AACqAAD/6m7/863/5k3/g4P+jY0mAABZAAD/63z/6GBqAABOAAB2AACdAAC4AADeSEfjXFwyIiJlHByNaWluWFhBAAB8aWmJHh7q1dVzGBiNPT2liYmicHC6JCSeKiq3dnbTsLCCUFA6EhJFKirMeXmeNzfSKyvndXXKWlrfqqrgj4/CYWHigYG4Pj7UHh3oQUHewnZfAAAQtElEQVR4nO1a6X/aWJYFP0tYSCBwsUiAzeZFLMbQYGNsk8QLKTupij3Tk57MpJKq6a5JKhl36v//Nve+JwmBnoSESVV/yKlf2cEI6egu5y4iEvmGb5hHOWeiXP6zqZgo5/aPB0e3V3trFvaubm8GJ/u5P5Nh+fjy5naNi/W1NeB3/GewK5dPbvb4rBzYuzn5g72bu7xFs8yZCf4DzP/19jL3h/E6uZiz1tXF0eDkmOLkcjC4uJqz3MXJH0ErN9hbdxjk6IQbTBCCRw6zru8Nvrbhyo7g2js69k3Acu74yHn01wy43JF9odvBfqCP7A+m2Xv01ew2sC1wFEIPysdHllv3Bl/DbuUTi9ftZdjzly/tnDhZObfchZWHx8t8vHxicbtYrUvLA4vX8vl/bHFbpUtzF+ss90P70QmIh/UVm+3YivvH3qxt+qUiwg1TKm6DyYQ/9k0NOVrBuco3ZnSs4FyIgZXgj3Vp7uoRGcmFmQnraxcnjyFnErtYpQqVbcHeW74q7K/Wkyac3eaS3PbZ3V06/hSTpJUyW9tbJk5MtbA9qdaaBFFspITHMLtwMltbD5+nub2Ze5KqBrJqFuGnUVEewexmbRZhgyXHjG3FQQlYVVVqKyUPtssvb7bB2qOolWlW7pnyKtQIqcbtNxV8uTQ1F7O1MNW4fDFjsSoptmbeF5tk6MwFQVZL1aGuZYbVlryA84mL2VoIVRqsOywWEYkhzh0Q1xzU5HylSGwUK6mwzIILJvuwFfxCheRdh8ga0WX6r1gVaBW1Rr6VUlNiXodXlYTPyfc5g+qlz/FO5GaPVonGuVJCJ00VfrUhZ6sF2cE5X5x3/gzKV25m6wGNRrVwqjN5UuUdJQ1JMV/SCGmoc+8oDUJK3qeflw3qz0DEaPJcTe9iSDwsUMOw4kZV3o/ayfx8HzQ/mfY7CppG5o1iQhArXvWgQMh80tgoc4it7QVgtjd/CxqJex7siTwpyl7vHXGYrS/W20s87tb5F534ywAXkNDc6ETwsnMqnv6fmjmqStrhmUXkpld4wt3zIm2R0S7cB7XIcAlmEGoZz2rAjTR/5citz/sS5EEzlnBnJDbkCLQJTh1YW/dv1ajWzB9S9Q4ZP4ik6VkLeEng26kdc49IFElhGWpDn49xCsGVnztplLknyxIpunpFYXEbJJKM53uc/PQLtJyHUYUq0ebUSVBb8dgCZrGmj964Q81PN25cimFdY0i0WbkVUnpDVBbYre0XoK4O0sdm1ML82orleyZoBFUnQ3FBcVAN70LgruxXC+7CI3fBoWToICLEK4TorQWjio9wuKn55Cbmy62nSQsGdD3TlwpQJUPVf/5MkaLPAeUZauveO51jUNl1n25EgMGuaHcQSh57oIboH2o1oolxtVUqtVSeX08cGXrjfRZUv3Xf66gZmDVNKkoBmRl5n0ACSBnoxA16pFYpue8iNzD3y+s+Cz86+voQp2gVicEKtSSykb21QDvyMFFVqtUGzgfu9jeCm/mji5sjv9JEBWZha4mdNKUWSw0ps+Gi5i0mJdBWiXgLcsbgcVsEdOZVgN1M26Sm1tgU55d9c5DbYOda2KVNOYgzKUrEQLGIl2j8kGaYKykwamkhtyL7gZxJ0SAV+JlIsUAjdmALit+caSKeIVo4j9I+M9jYJ2noTyHOAs2aiMG/YpD9FWi2EeAOpsAhM8gAg8hTozFFI/bYK7WHqUVFnqJC9BARQMMs6JYtViQQK4mWuc1oU0sJLaMpBmIW00nD/dfO5LrPO5pW88DrogrtCVXTnRVqAVknPGZCTJKUeFxRFMl2dYK426PsVjR6mOZcC9VsL/DTiAJ1p5Rn2UmTTQDfNufjLCbHWyVQWa2pDat50c6QPNHn76HTi0ajI861Bova3RmotFsVzDJgxIGQAjqqqTPMBEXND5uGvb9qVlNmR5fIuIyW3gFmXc61boKqGUWcaPhLbrBLQuDHWgbWAyczqVVzrNVIMTPUa1b2tklt7pTJU2B2mnRdqnwbIgEsm0ViBXZRMRGRS/C75tRQOa85eA3bBVFV1ZRpVdU9IkyA2VnWzQwTIPgqN0V0+juuW8ywnhLnGg29a1lLb6fiCiufFgiZF44uMKtzmAWvAAhrbE+0mTeBGeSpMzVtYobeLihSbF6C3WucETCLupNznz/OeSFvhokgoseMVEyAokMq06ojM0EpDkuqwtU491Kuj8w6rgOPvaYmPqrW4k6umqqhQFM5fUgg1FguFjynq6pr9ZdGZm6tpc1Z8OW3TkRJAf2MizVikGalMtQNaHfzhZRCo6mAS+Wa6DORcpjVuYJ2EryeI5okM5WpWTSHtZaKrm3h9BKTJb7VKi5vZntcQRssmN5nIQEtLZPRh5VGNV9qiSlVjYMiiK08a6qhJc+nFNC4SqbZ1Es8y3FWrIfAbMxnFpQYiIZhjcVCLCHLspSYJp8iVjPgSlXIA0mjCD+anFbRrRo+zHxm5DnYCi6BoShSqZQKkmVaJ1FqEg2kLlOKywqkr/vxAEdpV8FMqLDFdQxaCElW4hY9hGpmI7bi1mzadj/ba3C28nxmR2GYJXQDg0SwPAiNTly1uaWY79TidN0C1BozwSY3DXfHvQKbyZp7nYZpKIP9qAHjKB1SczpWAU2j5GixdVdBB2w/PgNkrek9mQsJbBTxUaJIDDvKsVjptRYjh89H3e22gKpx7vrzZRjVkJs+zByYWdcXaPHXhkMdClqTs5DP1rnMQimtUpx/eMdX09RMAgqpts7kudjgTZzpA24NCFU3VWO66Y8pheow09T0aj4lz0mqRIqzlAVJFVuiyq9ZHnUzF6bXEM3uDAc73VmZIJKc1kgYxUCzFEOH32uE6s8KdCgTEi18SN2slMS4HBcLNVaYtGrJKpXhmHn0Z6F62jypKq18BYLGqDqXVIJoPlDXCzQOJdIM8Q2FMRDruXta+iQgqM3apGgScKWoIMVLSLmZj+Ec4/08wI1rYLblnlAiuYurwGNAqmlkKrWWp3IkCth6FyA3K8GJ4SQcvea9E+Zb6XLco+uyEEthh1bhKb0X0oce8+bKUQBuYR4m90HODriLjZVDapNhyNTsuUXDiSRv7eGGWHzEd4M4wBF9x/+Qbs9dvNzAhnu5Z4sewHq+5X/IdbTuZVQhbks8nSc9AlwoVEuhtooRszb5maSTjaS3o2ceV6ySotmKsoWGx1cycNgMs1VEnPNrk43+wVkaY9HdwFl0WM8YL/qYTCY+b3qBhhlHZ6fMUOyuPdKX7mXp3ov1Wh4eq9IHOmFKpqlmE693O5M0Fq8RLtk46yLGjPbvlKLrO2kmZOgMUcxCbf1RM7zVbAvj6zC63cHlB48/xk8xTrt6gNWvpuYeirXgoFgmlMpGImfoTE+5Osfk6Nejp17+xO0KTrXUl9aiFUJudlGNX4KE6cQI1JBbiHoVzUjnbGTyGWH1Sp5Ft913gCsxTWZ5aU9PMLFhH6mUrD+AM8UUCdUA0a2eR2aOUcRAL7bRqVAkIBVc/hRQw/REgpqsLdVUiy6koaJZRhSQdYnwNv6eyJ55FwAgtZPFhnccye7gP7tu3RNwizeM0DVjJgGRBP6SlCKmK5oRjITJGkcbNn2/tOfCyE9mRzToJ+hPGv9Ztz8ps0qEqlVLAMtJsZoGHIw2GtMo5Id6i34nuCGzTGEIoB5nvtV8jKzTwCfJpKPTmy9jAm7/G1QxhjjOqpJjea21NZYWkAB5+D9j1gBRN4pm5ZdUj3Sls4mnmNGg7+BB1F69tNufMRQLXbPlNpKfEqvShS1uMhoQdxoujqnc1cx6IJRaog5jA+WYmH1KQZ8EcGaTKXNaL5m9qHRszVk48W9PGNjjzaHWLhbb4FQjU1VZWkA/hmnCTIn+bNA1H6RE27wDrFlCcfY58shbMkycY/wnt9Be5ygd4M+Z0i794ynD3/GeIegbSlxuUteCbYAwZidqLK0QaEBMjKEKh6iW31Hl4phAjvPiAODZ3jDQ+Ad/nlIDdxg/h83+/XuGv6JPWq9f/wf8fP766d+ESPz58+dPNAwtKUOeAIOSCJzQkDqtCZjBINIZ2tLJs8xG/lFGAfWynmTxha1QEls1RynI/udfKH54g6/e/NeL/45E3gLRnyKRv75++fIpDSxJA6M+HwoqeVJRgGQVC0ejgCYtYdS155lldxZEGQXY6zoJDUk9zaQDqG47mL17xkDZpt//+D6bfQ9Mf4788gOAWjKS/R/g+lIFYz6ttp6+fv3350+fP1d0sOk/EpAyT2rI7InjGeI4gMkitEp0I2mqFzQV+s5WLflh08QnfPXu1bs3fST6a/bdj4BfmN3/F4wKxvzlxYu3P70AfP/9W+mnl8D2LWjd05dvhUjq6cu/2aWLKoZ3LZ9e/BQNy0rnDqaCs7QnP2wgvnzY+IJnutvc7H9Enh8f8Oc7GsPZ3169evUMmH/+8dn/vQe+739+E3nzA7D9yy9I94efkmDhFz/b5zxb1GXbqEehq53guqhzAKmApcBq1ZJ3lNnnjxsbD/DyYWPjjnFF7H5AZv17/PcdEP9smvce/vgB2IKBwUCvnv0zkf7ns2f2mgwfHS4aTEyc0/iiekFToTP1J2O2mX1g1x4BnY3du41dwMP97u59v//xyy59BQd38R/43v2nD/ALTA22z8KdfIKPb1hXo75coBg2umZ8TWhv3mFVy8HsHo21O6KX2d390vkdr57tf2fiS/f0Htv5Tv2773r9Mfvjdn/3u98xArrsteU9+qgpmC8Rh1jKr5EUfHArmaWldMpshMw2MJm6G2ieERKDhNndxWv+3omYY0b/I37JgVKD0Di/ow5M9/D1tXkIK0vBfEk/jVIG8b9NpeOaSa/NDFggszs8+fk9vV12nc7Hu/sHt1/S49PPjszLTs7ObPWeBMxLG7RK9c2uKDq6tgxOmX1MRh424TfnfFmfoWyKpD370BGTs5n1AZUKqme0c8IgRSJJSLzN37KREeYc75sV4cCIBQ4yCpD+w2yEtkJjxoyeQPgNVQA6XypijyXWrwcT/7lPoZRhK2QRY2EKQraJenGH1B54E2mIS/SiHttPf9AqdX4QtUHHh88QXyioHVqmPjx86oc+sYUOPTd33vYHdGkHaWZvBtqofUI+mH4jFPXNV5uflyXWx6dfvMFxMUA6elEHaMuZhqLIUj77+eHXXz8tc2IK2pLxvzkV9MM2WCqmp/5LPmLf2KWuXLD69MbYSexshXvP7HU0rMLOIrk1JVZf4c45zSTybGliVlVjzMLpoR/MhA9eLHlIdqfJef049bJgejI6XlpuLG797njMcrS3vHY5Tmeea0Uu6Byy+zxdNpfsE5nhcfjYE9mwXFAfPyJqoR2qrzQwGEam6m53lz1rtrvNTtF7fJMyg/QkanFbqqJYvKKTx5idj74lb/VuWHHr2Dm+9VWexWXPrUJa3xoFz9Ps+ZbFq3e+ygibuUh3x5K33vWoE4BdenRqd1I7S8doEKQd2ru9NfbP/nT39NA++mCp+AyF82nNwuo3HvU76bTTfNl0p9/vTrYcbefB6eqqmx/6k+gM6jtnW6fX43H3/Lw7mZxu7WwfzLx/MP5jnkEzcqc70WA4vF6Z4AdEuj/eWkjrbDL66tHFRRbYHfYO3IwO6ts7p5PR18zFxYBwP+92IbrOdrZ7vUOIuEn3fNRP/7msnEgms9l0Opt8fKv0Dd/wDf/S+H9OO98c+72grwAAAABJRU5ErkJggg=="></img>
        <h3>Kababique Restaurant</h3>
        <h5>Chinese Items, Chicken</h5>
        <h5>4.5 Ratings</h5>
        <h5>Klk, Tamil Nadu</h5>
    </div>
)

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}
const App = () => {
    return (
        <div id="app">
            <Header/>
            <Body/>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);