# Node Server

This is a demo application running on a basic node server using the express framework.
MARKUP DEV



REFERENCES
calendar code sourced from https://codepen.io/CreativeCoder111/pen/NWOdyVK 
Reset css code copied from https://www.lucedigitale.com/blog/css-reset-to-copy-paste/
(https://grid.layoutit.com/) used for layout
How to create a popuphttps://www.w3schools.com/howto/howto_js_popup.asp
pie graph https://codepen.io/ejsado/pen/yLNMPG
bar graph https://codepen.io/team/carbon/pen/OzBKKN
Responsive design queries https://www.w3schools.com/html/html_responsive.asp



CHAT GTP
ME: reset scss code

GTP: Certainly! A reset SCSS code is typically used to remove or neutralize the default styling applied by browsers before you start adding your own styles. This ensures a more consistent appearance across different browsers. Here's a basic reset that you can include in your SCSS file: reset.scss file
ME:Clean up this <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness Tracker</title>
    <link rel="stylesheet" href="styles.css" />    
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    
    <div class="container">
        <div class="Profile">
          <div class="pic">        
            <img src="https://picsum.photos/500" alt="Profile pic">
          </div>
          <!-- graph containers -->

          <div class="graph-1">
            <h1>Activity Breakdown</h1>
  <section>
    <div class="pieID pie">
      
    </div>
    <ul class="pieID legend">
      <li>
        <em>Humans</em>
        <span>718</span>
      </li>
      <li>
        <em>Dogs</em>
        <span>531</span>
      </li>
      <li>
        <em>Cats</em>
        <span>868</span>
      </li>
      <li>
        <em>Slugs</em>
        <span>344</span>
      </li>
      <li>
        <em>Aliens</em>
        <span>1145</span>
      </li>
    </ul>
  </section>
          </div>
          <div class="graph-2">
          <h1>Monthly time spent</h1>
          <div class="chart-container" id="activity-chart-container">
            <ul id="activity-chart"></ul>
          </div>
        </div>
        </div>
        <!-- Activity log container -->

        <div class="Log">
          <div class="log-1"> 
            <div class="Title">    <h3>Activities Logged</h3> </div> 
            <div class="img">
              <img src="https://picsum.photos/200/300" alt="BAY RUN"> </div> 

            <div class="info">
            <p>Text beside the image</p> </div> 


          </div>
          <div class="log-2">
            <div class="Title">    <h3>Activities Logged</h3> </div> 
            <div class="img2">
          </div>
            
          </div>
          <div class="log-3">
            <div class="Title">    <h3>Activities Logged</h3> </div> 
          </div>
          <div class="log-4"></div>
        </div>
        <div class="header"> 
          <div class="notification">

            <div class="notifier new">
            <div><i class="fa-solid fa-bell"></i></div>
                <div class="badge">1</div>
            </div>
          </div>
        </div>
        <div class="Cal"></div>
<!-- Calendar container -->
          <div class="inner-container">
              <div class="calendar">
      
                  <div class="month">
      
                      <div class="prev" onclick="moveDate('prev')">
                          <span class="arrow">&#10094</span>
                      </div>
      
                      <div>
                          <h2 id="month">April-2023</h2>
                          <p id="date">Tue April 20 2023</p>
                      </div>
      
                      <div class="next" onclick="moveDate('next')">
                          <span class="arrow">&#10095</span>
                      </div>
      
                  </div>
      
                  <div class="week">
                      <div>Sun</div>
                      <div>Mon</div>
                      <div>Tue</div>
                      <div>Wed</div>
                      <div>Thu</div>
                      <div>Fri</div>
                      <div>Sat</div>
                  </div>
      
                  <div class="dates">
                      <div class="prev">26</div>
                      <div class="prev">27</div>
                      <div class="prev">28</div>
                      <div class="prev">29</div>
                      <div class="prev">30</div>
                      <div class="prev">32</div>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                      <div>13</div>
                      <div>14</div>
                      <div>15</div>
                      <div>16</div>
                      <div>17</div>
                      <div>18</div>
                      <div>19</div>
                      <div>20</div>
                      <div>21</div>
                      <div>22</div>
                      <div>23</div>
                      <div>24</div>
                      <div>25</div>
                      <div>26</div>
                      <div>27</div>
                      <div>28</div>
                      <div>29</div>
                      <div>30</div>
                      <div class="next">1</div>
                      <div class="next">2</div>
                      <div class="next">3</div>
                      <div class="next">4</div>
                      <div class="next">5</div>
                      <div class="next">6</div> 
                  </div>
      
              </div>
      
          </div>
<!-- Popup container -->
<div class="popup" id="popup">
  <p id="popupDate">Popup content</p>
  <div class="exercise">
    <div class="exercise-info">
      <label for="exercise">Exercise:</label>
      <select id="exercise" name="exercise">
        <option value="running">Running</option>
        <option value="cycling">Cycling</option>
        <option value="swimming">Swimming</option>
        <!-- Add more options as needed -->
      </select>
  <label for="description">Description:</label>
  <textarea id="description" placeholder="Description of activity"></textarea>
    <label for="duration">Duration:</label>
    <div class="time-input">
      <input type="number" id="hours" name="hours" min="0" max="23" placeholder="HH">
    </div>
    <div class="time-input">
      <input type="number" id="minutes" name="minutes" min="0" max="59" placeholder="MM">
    </div>
    <label for="effort">Effort:</label>
    <input type="range" id="effort" name="effort" min="0" max="10" step="1" value="5">
    <label for="felt">Felt:</label>

    <!-- Add smiley faces or emojis for different options -->
    <div class="smiley-icons">
      <input type="radio" id="sad" name="mood" value="sad">
      <label for="sad">😞</label>
      <input type="radio" id="medium" name="mood" value="medium">
      <label for="medium">😐</label>
      <input type="radio" id="happy" name="mood" value="happy">
      <label for="happy">😊</label>
    </div>
  </div>
  <button id="closePopupBtn">+</button>
</div>


<script src="script.js"></script>
<script src="app.js"></script>
</body>
</html>
ChatGTP: Filled in remaining logs for me Threw off the placement of my graphs so had to change that again